export const getMaxPoints = (questionsArr, answersArr) => {
  let maxPoints = 0;

  questionsArr.forEach((question) => {
    let theAnswers = answersArr.filter(
      (answer) => answer.questionId == question.id
    );
    if (!question.multipleChoice) {
      maxPoints += theAnswers.reduce((prev, current) => {
        return prev.points > current.points ? prev.points : current.points;
      }, {});
    } else {
      maxPoints += theAnswers.reduce((a, b) => a + b.points, 0);
    }
  });

  return maxPoints;
};

export const calculatePoints = (userAnswers, answerData) => {
  let total = 0;
  let keys = Object.keys(userAnswers);

  for (let key of keys) {
    let ids = userAnswers[key];
    ids.forEach((id) => {
      let item = answerData.find((answer) => answer.id === Number(id));
      console.log(item);
      total += item.points;
    });
  }

  return total;
};
