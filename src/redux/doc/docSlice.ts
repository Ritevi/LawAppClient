import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Doc } from "../../models/Doc";
import { getDocs } from "./docApi";


export interface DocState {
    docs: Doc[],
    status: 'idle' | 'loading' | 'failed';
}


const initialState: DocState = {
    docs: [],
    status: 'idle'
}

export const getDocsByIdsAsync = createAsyncThunk(
    'docs/getDocs',
   async (answerIds:string[]) => {
       return await getDocs(answerIds);
   }
)

export const docsSlice = createSlice({
    name:'docs',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getDocsByIdsAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(getDocsByIdsAsync.fulfilled,(state, action)=>{
            state.status = 'idle';
            state.docs  = action.payload;
        })       
    }
})


export const getDocsAsync = () :AppThunk =>(
    dispatch,
    getState
    ) =>{
        let tagIds = getState().tag.tags.map(x=>x.id);
        
        dispatch(getDocsByIdsAsync(tagIds));
        console.log(getState().answer)
    }

export const selectDocs = (state: RootState) =>state.doc.docs;

export default docsSlice.reducer;