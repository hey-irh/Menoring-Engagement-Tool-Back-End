const initialPeople = [
  {
    name: "The mentor",
    shortIntro: "Full stack developer with more than 10 years experience.",
    longIntro:
      "Worked for 2 years as a mechanic before upskilling and moving into tech. Have spent the last 10 years developing front ends, back ends, databases and so forth.",
    languages: ["JavaScript", "Node.js", "PHP", "Perl", "Ruby"],
    interests:
      "Enjoy swimming, travelling and walks on the beach with both of dogs.",
  },
  {
    name: "The mentee",
    shortIntro: "Used to work in retail, but have now begun to learn to code.",
    longIntro:
      "Finished school, but didn't feel university was right for me and instead got a job as a retail assistant. Felt I wasn't being challenged and wanted something that allowed me to be creative and solve problems.",
    languages: ["JavaScript", "TypeScript"],
    interests: "Hiking and learning new things.",
  },
];
const initialSessions = [
  {
    timestamp: new Date(2020, 10, 1, 11),
    notes: [
      "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
      "We can discuss a few examples, no problem.",
    ],
    mentorId: 1,
    menteeId: 2,
    mentorFeedback: null,
    menteeFeedback: 5,
  },
  {
    timestamp: new Date(2020, 10, 8, 18),
    notes: [
      "Do you have any advice/guidance on for working in fours and having good team dynamics?",
      "Absolutely, let's discuss in this week's session.",
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
