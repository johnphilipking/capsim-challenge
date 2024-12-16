

/*
    Question and answer data mocked up for demo purposes. In real life the data would 
    be pulled from database tables, so I'm simulating that here with a function for 
    fetching questions and one for fetching associated answers
*/

export const getQuestions = (testId) => {
  /*
    the SQL for this query would probably be something along the lines of: 

    SELECT id, label, multipleChoice, sortOrder
    FROM questions
    WHERE testId = `${testId}`
    ORDER BY  sortOrder

    if the table columns included a sortOrder and a "testId" foreign key
    
    */

  /* mock data */
  let result = [
    {
      id: 1000,
      label: "What's the first thing you should do when you need motivation?",
      multipleChoice: false,
      sortOrder: 1,
    },
    {
      id: 1001,
      label: "When was Capsim Founded?",
      multipleChoice: false,
      sortOrder: 2,
    },
    {
      id: 1002,
      label: "Which of the following are Capsim products?",
      multipleChoice: true,
      sortOrder: 3,
    },
  ];

  return result;
};

export const getAnswers = (testId) => {
  /*
      the SQL for this query would probably be something along the lines of: 
  
      SELECT id, questionId, label, points, sortOrder
      FROM answers
      WHERE testId = `${testId}`
      ORDER BY  sortOrder
  
      if the table columns included a sortOrder and a "testId" foreign key
      
      */

  /* mock data */
  let result = [
    {
      id: 2000,
      questionId: 1000,
      label: "Read a book",
      points: 5,
      sortOrder: 1,
    },
    {
      id: 2001,
      questionId: 1000,
      label: "Watch social media",
      points: 0,
      sortOrder: 2,
    },
    {
      id: 2002,
      questionId: 1000,
      label: "Go to the gym",
      points: 3,
      sortOrder: 3,
    },
    {
      id: 2003,
      questionId: 1000,
      label: "Run in the park",
      points: 7,
      sortOrder: 4,
    },
    {
      id: 2004,
      questionId: 1001,
      label: "August 2010",
      points: 0,
      sortOrder: 1,
    },
    {
      id: 2005,
      questionId: 1001,
      label: "April 1990",
      points: 0,
      sortOrder: 2,
    },
    {
      id: 2006,
      questionId: 1001,
      label: "December 2000",
      points: 0,
      sortOrder: 3,
    },
    {
      id: 2007,
      questionId: 1001,
      label: "January 1985",
      points: 1,
      sortOrder: 4,
    },

    {
      id: 2008,
      questionId: 1002,
      label: "CapsimInbox",
      points: 1,
      sortOrder: 1,
    },
    {
      id: 2009,
      questionId: 1002,
      label: "ModXM",
      points: 1,
      sortOrder: 2,
    },
    {
      id: 2010,
      questionId: 1002,
      label: "CapsimOutbox",
      points: 0,
      sortOrder: 3,
    },
    {
      id: 2011,
      questionId: 1002,
      label: "CompXM",
      points: 1,
      sortOrder: 4,
    },
  ];

  return result;
};

/* 
   Mock data:
   randomReportScores generates 100 random scores for demo
   in the real world this function might query a reports 
   datasource by report id and a span (year, month, week, etc.)
*/

export const scoresReportData = ({reportId, span}) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  // for demo we'll just send back mocked data
  let scores = [];

  for (let i = 0; i < 500; i++) {
    scores.push(Math.floor(Math.random() * 101));
  }

  let result = {
    reportId: reportId,
    data: scores,
  };

  return result;
};
