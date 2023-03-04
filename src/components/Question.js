import { useEffect, useState } from 'react';
import { getQuestion } from '../api';
import { questionsIds } from '../utils/constants';
import Loader from './Loader';
import styles from '../styles/question.module.css';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);
  const [questionIdIndex, setQuestionIdIndex] = useState(0);

  useEffect(() => {
    const getQues = async () => {
      const ques = await getQuestion(questionsIds[0]);
      setQuestion(ques);
      setLoading(false);
    };

    getQues();
  }, []);

  const handleNextClick = async () => {
    setLoading(true);
    let index = questionIdIndex;
    index = index === questionsIds.length - 1 ? 0 : index + 1;
    const ques = await getQuestion(questionsIds[index]);
    setQuestionIdIndex(index);
    setQuestion(ques);
    setLoading(false);
  };

  const handlePrevClick = async () => {
    setLoading(true);
    let index = questionIdIndex;
    index = index === 0 ? questionsIds.length - 1 : index - 1;
    const ques = await getQuestion(questionsIds[index]);
    setQuestionIdIndex(index);
    setQuestion(ques);
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.questionContainer}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.navigationBtnContainer}>
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick}>next</button>
      </div>
    </div>
  );
};

export default Question;
