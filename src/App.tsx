import './App.scss';
import { QuestionList } from './features/questionList/QuestionList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocList } from './features/docList/DocList';
import {Header} from "./features/header/Header";
import {Footer} from "./features/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
          <BrowserRouter >
              <Routes >
                  <Route path="/" element={<QuestionList />}/>
                  <Route path="/docs" element={<DocList />}/>
              </Routes>
          </BrowserRouter>
      </div>
      <Footer/>

    </div>  
  );
}
export default App;
