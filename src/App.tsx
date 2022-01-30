import './App.scss';
import { QuestionList } from './features/questionList/QuestionList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocList } from './features/docList/DocList';
import {Header} from "./features/header/Header";
import {Footer} from "./features/footer/Footer";
import {useState} from "react";

function App() {
    const [hint, SetHint] = useState('');

  return (
    <div className="App">
      <Header hint={hint}/>
      <div className="content">
          <BrowserRouter >
              <Routes >
                  <Route path="/" element={<QuestionList setHint={SetHint}/>}/>
                  <Route path="/docs" element={<DocList setHint={SetHint}/>}/>
              </Routes>
          </BrowserRouter>
      </div>
      <Footer/>

    </div>  
  );
}
export default App;
