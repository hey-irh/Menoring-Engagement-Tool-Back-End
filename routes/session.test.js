const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const assert = require("assert");

describe("Tests for session routes", () => {
  it("should return an array of session objects", async (done) => {
    const {
      body: { payload },
    } = await request.get("/sessions");
    const actual =
      Array.isArray(payload) &&
      payload.every((session) =>
        [
          "id",
          "timestamp",
          "notes",
          "mentor_feedback",
          "mentee_feedback",
          "mentor_id",
          "mentee_id",
        ].every((p) => session.hasOwnProperty(p))
      );
    expect(actual).toBe(true);
    done();
  });

  it("should return a session object", async (done) => {
    const newSession = {
      notes: ["note 1", "note 2"],
      timestamp: new Date().toISOString(),
      mentor_feedback: null,
      mentee_feedback: null,
      mentorId: 1,
      menteeId: 2,
    };
    const {
      body: { id, ...session },
    } = await request.post("/sessions").send(newSession);

    // const actual =
    //   payload &&
    //   typeof payload === "object" &&
    //   [
    //     "timestamp",
    //     "notes",
    //     "mentor_feedback",
    //     "mentee_feedback",
    //     "mentor_id",
    //     "mentee_id",
    //   ].every((p) => payload[p] === newSession[p]);
    expect(session).toStrictEqual({
      notes: newSession.notes,
      timestamp: newSession.timestamp,
      mentor_feedback: newSession.mentor_feedback,
      mentee_feedback: newSession.mentee_feedback,
      mentor_id: newSession.mentorId,
      mentee_id: newSession.mentorId,
    });
    done();
  });
});

// describe('POST /sessions', () => {
//   it.only('responds with json', async (done) => {
//     const response = await request.post('/sessions')
//       .send( {
//     timestamp: new Date(2020, 10, 1, 11),
//     notes: [
//       "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
//       "We can discuss a few examples, no problem.",
//     ],
//     mentorId: 1,
//     menteeId: 2,
//     mentorFeedback: null,
//     menteeFeedback: 5,
//   });
//   // expect(response.contentType).toBe(json);
//   expect(response.status).toBe(200);

//   const jsonResponse = await response.json();
//   expect(jsonResponse).toMatchObject({
//     mentorId: 1
//   });
//   // .expect('Content-Type', /json/)
//   // .expect(200)
//   // .then(response => {
//   //   assert(response === {
//   //     timestamp: new Date(2020, 10, 1, 11),
//   //     notes: [
//   //       "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
//   //       "We can discuss a few examples, no problem.",
//   //     ],
//   //     mentorId: 1,
//   //     menteeId: 2,
//   //     mentorFeedback: null,
//   //     menteeFeedback: 5,
//   //   })
//   // })
//   //   done();
// });
// });

// describe('PATCH /sessions:id', () => {
//   it('responds with json', async (done) => {
//     const response = await request.patch('/sessions/1')
//       .send( {
//         sessionId: 1,
//         notes:[
//           "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
//           "We can discuss a few examples, no problem.",
//         ],
//         menteeFeedback: null,
//         mentorFeedback: 5,
//       })
//       done();
//   });
// });
