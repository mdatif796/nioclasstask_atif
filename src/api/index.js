import axios from 'axios';
import { API_URLS } from '../utils/constants';

export const getQuestion = async (questionId) => {
  try {
    const response = await axios.get(API_URLS.getQuestion(questionId));
    // console.log('response: ', response.data[0].Question);
    return response.data[0].Question;
  } catch (error) {
    return error.message;
  }
};
