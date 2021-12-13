import { FC, useState } from "react"
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
    const selectedAnswers = useAppSelector(selectAnswers(question.id));
    const dispatch = useAppDispatch();
    const [needInfo, setNeedInfo] = useState<boolean>(false);

    let chooseAnswer = (answer : Answer)=>{
        dispatch(addAnswer({questionId:question.id,answer}));
    }

    let handleInfo = ()=>{
        setNeedInfo(!needInfo);
    }


    let renderAnswers = (answers:Answer[])=>{
        
        return answers.map(answer=> 
            <AnswerComponent answer={answer} chooseAnswer={chooseAnswer}/>
            )
    }

    return <div className={styles.question}>
        <ol>  
            {needInfo && <PreviousQuestionPopUp question={question.previousQuestion}/>}
            <p>{question.text} <span><button onClick={handleInfo}>?</button></span></p>          
            {renderAnswers(question.answers)}
        </ol>
    </div>
}