import { useEffect, useState } from 'react';
import { getQuestion } from '../api';
import { questionsIds } from '../utils/constants';
import Loader from './Loader';
import styles from '../styles/question.module.css';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQues = async () => {
      const ques = await getQuestion(questionsIds[0]);
      setQuestion(ques);
      setLoading(false);
    };

    getQues();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.questionContainer}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.navigationBtnContainer}>
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  );
};

export default Question;
