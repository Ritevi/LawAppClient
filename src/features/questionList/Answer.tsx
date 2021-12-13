import { FC, useState } from "react";
import { Answer } from "../../models/Answer";
import styles from './QuestionList.module.css';
export interface AnswerProps {
    answer: Answer,
    chooseAnswer : (answer:Answer)=>void,
    isChoosed : boolean
}

export const AnswerComponent:FC<AnswerProps> = ({answer,chooseAnswer, isChoosed})=>{
    console.log(isChoosed,answer.text);
    const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        chooseAnswer(answer);
      };

    let className = (isChoosed ? styles.choosed : "") ;
    return <li onClick={clickHandler} >
        <a className={className}>{answer.text}</a>
    </li>
}