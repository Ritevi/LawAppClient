import React, { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Answer } from "../../models/Answer"
import { Question } from "../../models/Question"
import { addAnswer, selectAnswers } from "../../redux/answer/answerSlice";
import { AnswerComponent } from "./Answer";
import { PreviousQuestionPopUp } from "./PreviousQuestionPopUp";
import styles from  './QuestionList.module.css';

interface QuestionSelectProps{
    question : Question
}

export const QuestionSelect: FC<QuestionSelectProps> = ({ question }) => {
    let selectedAnswers = useAppSelector(selectAnswers(question.id)) || [];
    let selectedAnswerIds =  selectedAnswers.map(x=>x.id);
    const dispatch = useAppDispatch();
    const [needInfo, setNeedInfo] = useState<{[index: string]:boolean}>({});
    const [showAnswers, setShowAnswers] = useState<boolean>(true);

    let chooseAnswer = (answer : Answer)=>{
        dispatch(addAnswer({questionId:question.id,answer, isBool:question.answers.length<=2}));
    }

    let handleInfo = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.stopPropagation();
        console.log(question.id)
        console.log(needInfo[question.id]);
        let needInfoObj = {...needInfo};
        needInfoObj[question.id] = !needInfo[question.id]
        setNeedInfo(needInfoObj);
    }


    let renderAnswers = (answers:Answer[])=>{
        console.log(answers);
        let copy = [...answers];
        return copy.sort((x,y)=>x.text.localeCompare(y.text)).map(answer=> 
                <AnswerComponent answer={answer} chooseAnswer={chooseAnswer} isChoosed={selectedAnswerIds.includes(answer.id)}/>
            )
    }

    let toogleShowAnswers = () => {
        setShowAnswers(!showAnswers);
    }

    return <div className={styles.question}>
        <ol>  
            {needInfo[question.id] && <PreviousQuestionPopUp question={question.previousQuestion}/>}
            <p onClick={toogleShowAnswers}>{question.text} <span><button onClick={handleInfo}>?</button></span></p>          
            {showAnswers && renderAnswers(question.answers)}
        </ol>
    </div>
}