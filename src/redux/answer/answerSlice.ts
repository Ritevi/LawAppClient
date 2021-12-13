import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState } from "../../app/store";
import { Answer } from "../../models/Answer";


export interface answerState {
    [index:string]:Answer[]
}


const initialState: answerState = {
}

export interface addAsnwerPayload {
    questionId : string,
    answer : Answer
}


export const answerSlice = createSlice({
    name:'answer',
    initialState,
    reducers:{
        addAnswer : (state, action:PayloadAction<addAsnwerPayload>) =>{
            let questionId = action.payload.questionId;
            let answer = action.payload.answer;
            if(!state[questionId]){
                state[questionId] = [];
            }
            let duplicate = state[questionId].find(x=>x.id === answer.id);
            if(duplicate){
                const index = state[questionId].indexOf(duplicate, 0);
                if (index > -1) {
                    state[questionId].splice(index, 1);
                }
            } else {
                state[questionId].push(answer);
            }
        },
        clearAnswers : (state)=>{
            Object.keys(state).forEach(x=>delete state[x])
        }
    }
})

export const {addAnswer, clearAnswers} = answerSlice.actions;

export const selectAnswers = (questionId:string)=>(state: RootState) =>state.answer[questionId];

export default answerSlice.reducer;