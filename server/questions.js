/*
  Choose between original data or customized data -
  
  original - data the team gave me for this challenge(recommend for testing requirements).
  customized - edited version of the original data(recommend for evaluating styling).
*/

/*
  original data
*/
// module.exports = [
//   {
//     "id": 1,
//     "question": "Question 1",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "Answer 1",
//         "rank": 3
//       },
//       {
//         "id": 2,
//         "answer": "Answer 2",
//         "rank": 2
//       }
//     ],
//     "tags": [
//       "a",
//       "b",
//       "c"
//     ],
//     "slug": "question_1"
//   },
//   {
//     "id": 2,
//     "question": "Question 2",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "Answer 1",
//         "rank": 3
//       }
//     ],
//     "tags": [
//       "a",
//       "c"
//     ],
//     "slug": "question_2"
//   },
//   {
//     "id": 3,
//     "question": "Question 3",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "test",
//         "rank": 3
//       },
//       {
//         "id": 2,
//         "answer": "test",
//         "rank": 2
//       }
//     ],
//     "tags": [
//       "a"
//     ],
//     "slug": "question_3"
//   },
//   {
//     "id": 4,
//     "question": "Question 4",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "Answer 1",
//         "rank": 3
//       },
//       {
//         "id": 2,
//         "answer": "Answer 2",
//         "rank": 2
//       },
//       {
//         "id": 3,
//         "answer": "Answer 3",
//         "rank": 2
//       }
//     ],
//     "tags": [
//       "c"
//     ],
//     "slug": "question_4"
//   },
//   {
//     "id": 5,
//     "question": "Question 5",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "Answer 1",
//         "rank": 1
//       },
//       {
//         "id": 2,
//         "answer": "Answer 2",
//         "rank": 4
//       }
//     ],
//     "tags": [
//       "d"
//     ],
//     "slug": "question_5"
//   },
//   {
//     "id": 6,
//     "question": "Question 6",
//     "answers": [
//       {
//         "id": 1,
//         "answer": "Answer 1",
//         "rank": 5
//       }
//     ],
//     "tags": [
//       "a",
//       "b"
//     ],
//     "slug": "question_6"
//   }
// ]

/*
  customized data
*/
module.exports = [
  {
    "id": 1,
    "question": "What is one random thing you know about a computer that most people don’t?",
    "answers": [
      {
        "id": 1,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 3
      },
      {
        "id": 2,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 2
      }
    ],
    "tags": [
      "a",
      "b",
      "c"
    ],
    "slug": "question_1"
  },
  {
    "id": 2,
    "question": "As a software engineer, how good/bad has your experience been using Go at work?",
    "answers": [
      {
        "id": 1,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 3
      }
    ],
    "tags": [
      "a",
      "c"
    ],
    "slug": "question_2"
  },
  {
    "id": 3,
    "question": "How does an operating system support multiple users using a single processor and a single memory?",
    "answers": [
      {
        "id": 1,
        "answer": "test",
        "rank": 3
      },
      {
        "id": 2,
        "answer": "test",
        "rank": 2
      }
    ],
    "tags": [
      "a"
    ],
    "slug": "question_3"
  },
  {
    "id": 4,
    "question": "Why do most of the developers in Silicon Valley prefer macOS over Linux or Windows?",
    "answers": [
      {
        "id": 1,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 3
      },
      {
        "id": 2,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 2
      },
      {
        "id": 3,
        "answer": "Answer 3",
        "rank": 2
      }
    ],
    "tags": [
      "c"
    ],
    "slug": "question_4"
  },
  {
    "id": 5,
    "question": "How do I plan and complete reading Introduction to Algorithms and implement a decent number of algorithms within a period of one month?",
    "answers": [
      {
        "id": 1,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 1
      },
      {
        "id": 2,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 4
      }
    ],
    "tags": [
      "d"
    ],
    "slug": "question_5"
  },
  {
    "id": 6,
    "question": "Is Rey Vader's daughter?",
    "answers": [
      {
        "id": 1,
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "rank": 5
      }
    ],
    "tags": [
      "a",
      "b"
    ],
    "slug": "question_6"
  }
]