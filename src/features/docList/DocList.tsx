import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Doc } from "../../models/Doc";
import { getDocsAsync, selectDocs } from "../../redux/doc/docSlice";
import { DocGroupComponent } from "./DocGroupComponent";
import styles from "./DocList.module.scss"

export interface DocListProps{
    setHint:  (hint: string) => void;
}

export const DocList : FC<DocListProps> = (props)=>{
    props.setHint("Мы просчитали ваши ответы. На их основе необходимо выполнить требования в описанных документах, а также получить описанные лицензии. " +
        "Также вы можете следовать рекомендациям написанным нашими юристами для Вашего комфорта.");
    const docs = useAppSelector(selectDocs);
    const dispatch = useAppDispatch();
    let groupedDocsByType = groupBy(docs,"type");
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getDocsAsync());
    },[dispatch])

    let goToMain = ()=>{
        navigate("/")
    }

    const renderGroup = (groupedDocs:{
        [key: string]: Doc[];
    })=>{
        let keys = Object.keys(groupedDocs)
        return keys.map(key=>
            <DocGroupComponent docs={groupedDocs[key]} keyName = {key as keyof Doc}/>
            )
    }

    return <>
    <div className={styles.docGroupList}>
        {
            renderGroup(groupedDocsByType)
        }
        
    </div>
    <button className={styles.questionButton} onClick={goToMain}>Назад к вопросам</button>
    </>
}

var groupBy = function(xs: Doc[], key: keyof Doc) : {[key: string]: Doc[]} {
    return xs.reduce(function(rv:{[key: string]: Doc[]}, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };