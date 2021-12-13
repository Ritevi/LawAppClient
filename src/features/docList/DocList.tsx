import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Doc } from "../../models/Doc";
import { getDocsAsync, selectDocs } from "../../redux/doc/docSlice";
import { DocComponent } from "./DocComponent";
import styles from "./DocList.module.css"

export interface DocListProps{

}

export const DocList : FC<DocListProps> = ({})=>{
    const docs = useAppSelector(selectDocs);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getDocsAsync());
    },[dispatch])

    const renderDocs = (docs: Doc[])=>{
        return docs.map(x=>
            <DocComponent doc={x}/>
            )
    }

    return <div className={styles.docs}>
        <p>Необходимые документы</p>
        <ol>
        {renderDocs(docs)}
        </ol>
    </div>
}