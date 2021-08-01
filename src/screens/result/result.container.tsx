import React, { useState, useEffect } from 'react';
import ResultView from './result.view';
import { retrieveData } from '../../utils/helper';

export const ResultContainer = () => {

    const [scores, setScores] = useState(0)
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const scores = retrieveData('scores');
        const answers = retrieveData('answers');

        setScores(scores);
        setAnswers(answers);
    }, [])

    return <ResultView scores={scores} answers={answers} />
}