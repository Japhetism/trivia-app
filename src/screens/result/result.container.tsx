import React, { useState, useEffect } from 'react';
import ResultView from './result.view';
import { retrieveData } from '../../utils/helper';

export const ResultContainer = (props: any) => {
  const [scores, setScores] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const retrievedAnswers = retrieveData('answers');

    if (!answers) {
      props.history.push('/');
    } else {
      const correctAnswers = retrievedAnswers.filter((item: any) => item.answer === 'correct').length;
      setScores(correctAnswers);
      setAnswers(retrievedAnswers);
    }
  }, [props]);

  return <ResultView scores={scores} answers={answers} />;
};
