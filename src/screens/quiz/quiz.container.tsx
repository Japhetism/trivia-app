import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizView from './quiz.view';
import QuestionsService from '../../services/questions.service';
import { storeData } from '../../utils/helper';
import { clearData } from '../../utils/helper';

export const QuizContainer = (props: any) => {

    const dispatch = useDispatch();
    const defaultState = useSelector((state: any) => state);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        clearData();
        setIsLoading(true);
        QuestionsService.fetchQuestions(dispatch);
    }, [dispatch]);

    useEffect(() => {
        console.log(defaultState);
        const questions = defaultState?.questionsData?.questions?.results;
        const isLoading = defaultState?.questionData?.loading;
        setTimeout(() => {
            setQuestions(questions);
            setIsLoading(isLoading);
        }, 1000);
    }, [defaultState])

    const handleAnswers = (index: number, question: any, answer: string) => {
        const previousAnswers = answers as any;
        const newAnswer = {
            question: question.question,
            answer: question.correct_answer === answer ? 'correct' : 'wrong'
        }
        previousAnswers.push(newAnswer)
        setAnswers(previousAnswers);
        setActiveQuestion(index + 1);

       if (index + 1 === questions.length) {
            redirectToResult();
        }
    }

    const redirectToResult = () => {
        storeData('answers', answers);
        props.history.push("/result");
    }

    return <QuizView questions={questions} activeQuestion={activeQuestion} handleAnswers={handleAnswers} isLoading={isLoading} />
}