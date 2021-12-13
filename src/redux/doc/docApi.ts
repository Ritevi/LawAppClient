import axios from "axios";
import { getServer } from "../../config";
import { Doc } from "../../models/Doc";

export async function getDocs(tagIds:string[]) : Promise<Doc[]> {
    var body = {
        "pagingParameters": {
            "skip": 0,
            "take": 100
          },
          "tags": tagIds
    }
    //return  (await axios.post<Doc[]>(getServer() + "/api/Doc/doc",body)).data;
    return [{name:"first doc", id: "1"},{name:"second doc", id: "2"},{name:"third doc", id: "3"},{name:"fourth doc", id: "4"}]
}