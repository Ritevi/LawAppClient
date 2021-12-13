import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import questionReducer from '../redux/question/questionSlice';
import tagReducer from '../redux/tag/tagSlice';
import answerReducer from '../redux/answer/answerSlice';
import docReducer from '../redux/doc/docSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    question: questionReducer,
    tag: tagReducer,
    answer: answerReducer,
    doc:docReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
