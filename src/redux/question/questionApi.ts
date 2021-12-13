import axios from "axios";
import { getServer } from "../../config";
import { Question } from "../../models/Question";

export async function getFirstQuestions() : Promise<Question[]> {
    console.log("hi");
    return  (await axios.get<Question[]>(getServer() + "/api/Question/question")).data;
}

export async function getNextQuestions(answerIds:string[]) : Promise<Question[]> {
    var body = {
        "pagingParameters": {
            "skip": 0,
            "take": 100
          },
          "answers": answerIds
    }
    return  (await axios.post<Question[]>(getServer() + "/api/Question/question",body)).data;
}