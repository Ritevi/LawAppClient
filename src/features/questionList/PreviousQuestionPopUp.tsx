import { FC } from "react"
import { Question } from "../../models/Question"
import styles from "./QuestionList.module.css"
export interface PreviousQuestionPopUpProps {
    question: Question
}


export const PreviousQuestionPopUp : FC<PreviousQuestionPopUpProps> = ({question})=>{

    if(!question)
        return <></>

    return <div className={styles.popup}>
        <p>{question.text}</p>
    </div>
}