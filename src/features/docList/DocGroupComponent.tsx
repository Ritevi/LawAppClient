import { FC } from "react";
import { Doc } from "../../models/Doc";
import { DocComponent } from "./DocComponent";
import styles from "./DocList.module.css"


export interface DocGroupComponentProps {
    docs:Doc[],
    keyName:keyof Doc
}

const ParseType = (typeNumber:string)=>{
    switch (typeNumber){
        case "0":
            return "Документы"
        case "1":
            return "Лицензии"    
        case "2": 
            return "Рекомендации"

    }
}

export const DocGroupComponent : FC<DocGroupComponentProps> = ({docs, keyName})=>{

    const renderDocs = (docs: Doc[])=>{
        return docs.map(x=>
            <DocComponent doc={x}/>
            )
    }

    return <div className={styles["docGroup"+keyName]}>
    <p className={styles.docName}>{ParseType(keyName)}</p>
    <div className={styles.docs}>
    <ol>
        {renderDocs(docs)}
    </ol>
    </div>
</div>
}
