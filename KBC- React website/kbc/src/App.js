
import { useState } from 'react';
import './App.css';
import Question from './componentes/Question';

function App() {
  const [questionNo, setQuestionNo] = useState(1)

  const questions = [
    { id: 1, amount: 1000 },
    { id: 2, amount: 10000 },
    { id: 3, amount: 20000 },
    { id: 4, amount: 40000 },
    { id: 5, amount: 100000 },
    { id: 6, amount: 350000 },
    { id: 7, amount: 1000000 },
    { id: 8, amount: 2500000 },
    { id: 9, amount: 10000000 },
    { id: 10, amount: 70000000 }
  ].reverse()
  return (

    <div className="App">
      <div className="main">
        <Question />


      </div>
      <div className="sidebar">
        <ul>
          {questions.map((e) => (
            <li className={questionNo === e.id ? 'list active' : 'list'}>
              <span className='span'>
                {e.id})
              </span>
              <span className='span'>RS. {e.amount}</span>
            </li>
          ))}



        </ul>

      </div>
    </div>
  );
}

export default App;
