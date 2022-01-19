import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Doc } from "../../models/Doc";
import { getDocsAsync, selectDocs } from "../../redux/doc/docSlice";
import { DocGroupComponent } from "./DocGroupComponent";
import styles from "./DocList.module.css"

export interface DocListProps{

}

export const DocList : FC<DocListProps> = ({})=>{
    const docs = useAppSelector(selectDocs);
    const dispatch = useAppDispatch();
    let groupedDocsByType = groupBy(docs,"type");

    useEffect(()=>{
        dispatch(getDocsAsync());
    },[dispatch])



    const renderGroup = (groupedDocs:{
        [key: string]: Doc[];
    })=>{
        let keys = Object.keys(groupedDocs)
        return keys.map(key=>
            <DocGroupComponent docs={groupedDocs[key]} keyName = {key as keyof Doc}/>
            )
    }

    return <div className={styles.docGroupList}>
        {
            renderGroup(groupedDocsByType)
        }
    </div>
}

var groupBy = function(xs: Doc[], key: keyof Doc) : {[key: string]: Doc[]} {
    return xs.reduce(function(rv:{[key: string]: Doc[]}, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };