export const parseForm = (form) => {
  const data = new FormData(form);
  let collection = {};

  for (let [key, value] of data) {
    if (!collection[key]) {
      collection[key] = [value];
    } else {
      collection[key].push(value);
    }
  }

  return collection;
};

export const formComplete = (questionIds, userAnswers) => {
  let answerIds = Object.keys(userAnswers);

  if (answerIds.length === questionIds.length) {
    return true;
  }

  return false;
};
