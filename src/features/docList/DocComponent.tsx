import { FC } from "react";
import { Doc } from "../../models/Doc";
import './DocList.module.scss';
export interface DocComponentProps {
    doc:Doc
}

export const DocComponent : FC<DocComponentProps> = ({doc})=>{

    return <li><a>{doc.name}</a></li>
}
