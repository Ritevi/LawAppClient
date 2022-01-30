import { FC } from "react";
import { Doc } from "../../models/Doc";
import { DocComponent } from "./DocComponent";
import styles from "./DocList.module.scss"


export interface DocGroupComponentProps {
    docs:Doc[],
    keyName:keyof Doc
}

const ParseType = (typeNumber:string)=>{
    switch (typeNumber){
        case "0":
            return "Документы. Затрагиваемые НПА:"
        case "1":
            return "Лицензии. Требуемые лицензии и сертификаты:"
        case "2": 
            return "Рекомендации. Перечень организационно технических мер:"

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
