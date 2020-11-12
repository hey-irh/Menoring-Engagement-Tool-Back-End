const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const assert = require ('assert');

describe("Tests for session routes", () => {
  it("should return an array of session objects", async (done) => {
    const response = await request.get("/sessions");
    done();
  });
});

describe('POST /sessions', () => {
  it.only('responds with json', async (done) => {
    const response = await request.post('/sessions')
      .send( {
    timestamp: new Date(2020, 10, 1, 11),
    notes: [
      "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
      "We can discuss a few examples, no problem.",
    ],
    mentorId: 1,
    menteeId: 2,
    mentorFeedback: null,
    menteeFeedback: 5,
  });
  // expect(response.contentType).toBe(json);
  expect(response.status).toBe(200);

  const jsonResponse = await response.json();
  expect(jsonResponse).toMatchObject({
    mentorId: 1
  });
  // .expect('Content-Type', /json/)
  // .expect(200)
  // .then(response => {
  //   assert(response === {
  //     timestamp: new Date(2020, 10, 1, 11),
  //     notes: [
  //       "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
  //       "We can discuss a few examples, no problem.",
  //     ],
  //     mentorId: 1,
  //     menteeId: 2,
  //     mentorFeedback: null,
  //     menteeFeedback: 5,
  //   })
  // })
  //   done();
});
});

describe('PATCH /sessions:id', () => {
  it('responds with json', async (done) => {
    const response = await request.patch('/sessions/1')
      .send( {
        sessionId: 1, 
        notes:[
          "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
          "We can discuss a few examples, no problem.",
        ], 
        menteeFeedback: null, 
        mentorFeedback: 5,
      })
      done();
  });
});


