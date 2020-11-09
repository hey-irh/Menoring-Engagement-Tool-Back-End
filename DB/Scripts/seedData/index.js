const initialPeople = [{ name: "The mentor" }, { name: "The mentee" }];
const initialSessions = [
  {
    timestamp: new Date(2020, 10, 1, 11),
    notes: [
      "A useful note",
      "Super useful note",
      "A less useful note",
      "Best note",
      "Just another note",
    ],
    mentorId: 1,
    menteeId: 2,
    mentorFeedback: null,
    menteeFeedback: 5,
  },
  {
    timestamp: new Date(2020, 10, 8, 18),
    notes: [
      "A useful note",
      "Super useful note",
      "A less useful note",
      "Best note",
      "Just another note",
    ],
    mentorId: 1,
    menteeId: 2,
    mentorFeedback: 3,
    menteeFeedback: 4,
  },
];

module.exports = {
  initialPeople,
  initialSessions,
};
