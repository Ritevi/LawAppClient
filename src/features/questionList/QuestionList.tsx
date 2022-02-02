import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getFirstQuestionAsync, getNextQuestionsAsync, selectQuestions } from "../../redux/question/questionSlice";
import { QuestionSelect } from "./QuestionSelect";
import { useNavigate } from 'react-router-dom';
import styles from  './QuestionList.module.scss';
import {Question} from "../../models/Question";
export interface QuestionListProps{
    setHint:  (hint: string) => void;
}

export const QuestionList : FC<QuestionListProps> = (props)=>{
    props.setHint("Давайте начнем с крупных категорий. Внимательно прочитайте вопросы, не пропустите ничего!");
    const questions = useAppSelector(selectQuestions);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getFirstQuestionAsync());
    },[dispatch])
    
    let submitNextQuestions = ()=>{
        dispatch(getNextQuestionsAsync())
    }

    if(questions.length === 0){
        navigate("/docs");
    }
    if (questions.some((q: Question)=> q.previousQuestion)) {
        props.setHint("Пожалуйста ответьте на вопросы для составления отчета.");
    }

    return <>
        {
            questions.map(x=>
                <QuestionSelect question={x}/>
                )
        }
        <button className={styles.questionButton} onClick={submitNextQuestions}>Следующий шаг</button>
    </>
}

