import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuizView from './quiz.view';
import QuestionsService from '../../services/questions.service';

export const QuizContainer = () => {

    const dispatch = useDispatch();
    const defaultState = useSelector((state) => state);

    console.log(defaultState);

    useEffect(() => {
        QuestionsService.fetchQuestions(dispatch);
    }, [dispatch]);

    return <QuizView questions={defaultState} />
}