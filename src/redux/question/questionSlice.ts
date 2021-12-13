import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Answer } from "../../models/Answer";
import { Question } from "../../models/Question";
import { clearAnswers } from "../answer/answerSlice";
import { addTags } from "../tag/tagSlice";
import { getFirstQuestions, getNextQuestions } from "./questionApi";


export interface QuestionState {
    questions: Question[],
    status: 'idle' | 'loading' | 'failed';
}


const initialState: QuestionState = {
    questions: [],
    status: 'idle'
}

export const getFirstQuestionAsync = createAsyncThunk(
    'questions/getFirstQuestions',
   async () => {
       return await getFirstQuestions();
   }
)

export const getNextQuestionByIdsAsync = createAsyncThunk(
    'questions/getNextQuestions',
   async (answerIds:string[]) => {
       return await getNextQuestions(answerIds);
   }
)

export const questionSlice = createSlice({
    name:'questions',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getFirstQuestionAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(getFirstQuestionAsync.fulfilled,(state, action)=>{
            state.status = 'idle';
            state.questions  = action.payload;
        })    
        .addCase(getNextQuestionByIdsAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(getNextQuestionByIdsAsync.fulfilled,(state, action)=>{
            state.status = 'idle';
            state.questions  = action.payload;
        })    
    }
})

export const getNextQuestionsAsync = () :AppThunk =>(
    dispatch,
    getState
    ) =>{
        let questionIds = Object.keys(getState().answer);
        let answers:Answer[] = [];
        questionIds.forEach(x=>answers = answers.concat(getState().answer[x]))
        let answerIds = answers.map(x=>x.id);
        let tags = answers.map(x=>x.tags);
        if(tags.length !== 0){
            let tagsIds = tags.reduce((prev,next)=>prev.concat(next));
            dispatch(addTags(tagsIds));
        }
        
        dispatch(getNextQuestionByIdsAsync(answerIds));
        dispatch(clearAnswers());
    }


export const selectQuestions = (state: RootState) =>state.question.questions;

export default questionSlice.reducer;