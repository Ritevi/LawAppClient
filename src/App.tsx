import './App.css';
import { QuestionList } from './features/questionList/QuestionList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocList } from './features/docList/DocList';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes >
        <Route path="/" element={<QuestionList />}/>
        <Route path="/docs" element={<DocList />}/>
      </Routes>
    </BrowserRouter>
    </div>  
  );
}
export default App;
