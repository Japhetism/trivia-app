import React, { useState, useEffect } from 'react';
import ResultView from './result.view';
import { retrieveData } from '../../utils/helper';

export const ResultContainer = (props: any) => {

    const [scores, setScores] = useState(0)
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const answers = retrieveData('answers');

        if (!answers) {
            props.history.push("/");
        } else {
            const correctAnswers = answers.filter((item: any) => item.answer === "correct").length;
            setScores(correctAnswers);
            setAnswers(answers);
        }
    }, [props])

    return <ResultView scores={scores} answers={answers} />
}