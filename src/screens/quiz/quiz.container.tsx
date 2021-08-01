import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizView from './quiz.view';
import QuestionsService from '../../services/questions.service';
import { storeData } from '../../utils/helper';
import { Redirect } from 'react-router';

export const QuizContainer = (props: any) => {

    const dispatch = useDispatch();
    const defaultState = useSelector((state) => state);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [scores, setScores] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        QuestionsService.fetchQuestions(dispatch);
    }, [dispatch]);

    const handleAnswers = (index: number, question: any, answer: string) => {
        const previousAnswers = answers as any;
        const newAnswer = {
            question: question.question,
            answer: question.correct_answer === answer ? 'correct' : 'wrong'
        }
        previousAnswers.push(newAnswer)
        setAnswers(previousAnswers);
        setScores(question.correct_answer === answer ? scores + 1 : scores);
        setActiveQuestion(index + 1);

        if (index + 1 === totalQuestions) {
            redirectToResult();
        }
    }

    const redirectToResult = () => {
        storeData('scores', scores);
        storeData('answers', answers);
        props.history.push("/result");
    }

    return <QuizView questions={defaultState} activeQuestion={activeQuestion} handleAnswers={handleAnswers} setTotalQuestions={setTotalQuestions} />
}