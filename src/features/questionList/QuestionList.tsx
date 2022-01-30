import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getFirstQuestionAsync, getNextQuestionsAsync, selectQuestions } from "../../redux/question/questionSlice";
import { QuestionSelect } from "./QuestionSelect";
import { useNavigate } from 'react-router-dom';
import styles from  './QuestionList.module.scss';
export interface QuestionListProps{
    
}

export const QuestionList : FC<QuestionListProps> = ({})=>{
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

    return <>
        {
            questions.map(x=>
                <QuestionSelect question={x}/>
                )
        }
        <button className={styles.questionButton} onClick={submitNextQuestions}>Следующий шаг</button>
    </>
}

