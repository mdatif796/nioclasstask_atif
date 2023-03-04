const API_ROOT =
  'https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=';

export const API_URLS = {
  getQuestion: (questionId) => `${API_ROOT}${questionId}`,
};

export const questionsIds = [
  'AreaUnderTheCurve_901',
  'BinomialTheorem_901',
  'DifferentialCalculus2_901',
];
