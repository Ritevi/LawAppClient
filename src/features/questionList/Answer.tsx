import { FC, useState } from "react";
import { Answer } from "../../models/Answer";
import styles from './QuestionList.module.css';
export interface AnswerProps {
    answer: Answer,
    chooseAnswer : (answer:Answer)=>void
}

export const AnswerComponent:FC<AnswerProps> = ({answer,chooseAnswer})=>{
    let [isChoosed, setIsChoosed] = useState<boolean>(false);

    const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        chooseAnswer(answer);
        setIsChoosed(!isChoosed);
      };

    let className = (isChoosed && styles.choosed) as string;
    return <li onClick={clickHandler} >
        <a className={className}>{answer.text}</a>
    </li>
}