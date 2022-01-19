import axios from "axios";
import { getServer } from "../../config";
import { Doc } from "../../models/Doc";

export async function getDocs(tagIds:string[]) : Promise<Doc[]> {
    var body = tagIds
    console.log(body);
    let data =  (await axios.post<Doc[]>(getServer() + "/api/Docs/tags",body)).data;
    console.log(data);
    return data;
    // return [
    // {name:"Документ номер 1", id: "1", type:"1"},
    // {name:"Документ номер 2", id: "2", type:"1"},
    // {name:"Документ номер 3", id: "3", type:"2"},
    // {name:"Документ номер 4", id: "4", type:"2"},
    // {name:"Документ номер 5", id: "5", type:"1"},
    // {name:"Документ номер 6", id: "6", type:"1"},
    // {name:"Документ номер 7", id: "7", type:"2"},
    // {name:"Документ номер 8", id: "8", type:"2"},
    // {name:"Документ номер 9", id: "9", type:"1"},
    // {name:"Документ номер 10", id: "10", type:"1"},
    // {name:"Документ номер 11", id: "11", type:"2"},
    // {name:"Документ номер 12", id: "12", type:"2"},
    // {name:"Документ номер 13", id: "13", type:"3"},
    // {name:"Документ номер 14", id: "14", type:"3"},
    // {name:"Документ номер 15", id: "15", type:"3"},
    // {name:"Документ номер 16", id: "16", type:"3"}
    // ]
}