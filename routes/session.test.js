const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const assert = require("assert");

const someSessionObject = expect.objectContaining({
  id: expect.any(Number),
  timestamp: expect.any(String),
  notes: expect.arrayContaining([expect.any(String)]),
  mentor_feedback: expect.anything(),
  mentee_feedback: expect.anything(),
  mentor_id: expect.any(Number),
  mentee_id: expect.any(Number),
});

const someArrayOfSessionObjects = expect.arrayContaining([someSessionObject]);

describe("GET /sessions", () => {
  it("should return an array of session objects", async (done) => {
    const response = await request.get("/sessions");
    expect(response.body.payload).toStrictEqual(someArrayOfSessionObjects);
    expect(response.status).toBe(200);
    done();
  });
});

describe("POST /sessions", () => {
  it("should return the newly created session object", async (done) => {
    const newSession = {
      notes: ["note 1", "note 2"],
      timestamp: new Date().toISOString(),
      mentor_feedback: null,
      mentee_feedback: null,
      mentorId: 1,
      menteeId: 2,
    };
    const response = await request.post("/sessions").send(newSession);
    expect(response.body.payload).toMatchObject({
      notes: newSession.notes,
      timestamp: newSession.timestamp,
      mentor_feedback: newSession.mentor_feedback,
      mentee_feedback: newSession.mentee_feedback,
      mentor_id: newSession.mentorId,
      mentee_id: newSession.menteeId,
    });
    expect(response.status).toBe(200);
    done();
  });
});

describe("PATCH /sessions/:id", () => {
  it("should", async (done) => {
    const sessionId = 1;
    const updatedSession = {
      notes: [
        "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
        "We can discuss a few examples, no problem.",
      ],
      menteeFeedback: null,
      mentorFeedback: 5,
    };

    const response = await request
      .patch(`/sessions/${sessionId}`)
      .send(updatedSession);

    console.log(response.body.payload);

    expect(response.body.payload).toMatchObject({
      id: sessionId,
      notes: updatedSession.notes,
      mentee_feedback: updatedSession.menteeFeedback,
      mentor_feedback: updatedSession.mentorFeedback,
    });
    expect(response.status).toBe(200);
    done();
  });
});
