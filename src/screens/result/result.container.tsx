import React, { useState, useEffect } from 'react';
import ResultView from './result.view';
import { retrieveData } from '../../utils/helper';

export const ResultContainer = () => {

    const [scores, setScores] = useState(0)
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const answers = retrieveData('answers');
        const correctAnswers = answers.filter((item: any) => item.answer === "correct").length;
        setScores(correctAnswers);
        setAnswers(answers);
    }, [])

    return <ResultView scores={scores} answers={answers} />
}