import axios from 'axios';
import { API_URLS } from '../utils/constants';

export const getQuestion = async (questionId) => {
  try {
    const response = await axios.get(API_URLS.getQuestion(questionId));
    return response[0].Question;
  } catch (error) {
    return error.message;
  }
};
