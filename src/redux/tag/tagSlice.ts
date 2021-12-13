import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Tag } from "../../models/Tag";


export interface TagState {
    tags: Tag[],
}


const initialState: TagState = {
    tags: [],
}



export const tagsSlice = createSlice({
    name:'tags',
    initialState,
    reducers:{
        addTags : (state, action:PayloadAction<Tag[]>) =>{
            state.tags = state.tags.concat(action.payload);
            //todo only unique values
        },
        clearTags : (state)=>{
            state.tags = [];
        }
    }
})

export const {addTags, clearTags} = tagsSlice.actions;

export const selectTags = (state: RootState) =>state.tag.tags;

export default tagsSlice.reducer;