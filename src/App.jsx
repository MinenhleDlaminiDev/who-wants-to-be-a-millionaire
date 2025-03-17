import { useEffect, useState, useMemo } from 'react';
import "./app.css";
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R 0");
  const [quizData, setQuizData] = useState([]);

  // Supabase API URL and Key (replace with your actual values)
  const supabaseUrl = 'https://xyzcompany.supabase.co';  // Replace with your actual Supabase URL
  const supabaseKey = 'your_supabase_anon_key';  // Replace with your actual Supabase API key

  // Money List
  const moneyPyramid = useMemo(() => [
    { id: 1, amount: "R 100" },
    { id: 2, amount: "R 500" },
    { id: 3, amount: "R 1 000" },
    { id: 4, amount: "R 3 000" },
    { id: 5, amount: "R 5 000" },
    { id: 6, amount: "R 10 000" },
    { id: 7, amount: "R 20 000" },
    { id: 8, amount: "R 50 000" },
    { id: 9, amount: "R 100 000" },
    { id: 10, amount: "R 250 000" },
  ].reverse(), []);

  // Fetch quiz data from Supabase using fetch
  const fetchQuizData = async () => {
    try {
      const response = await fetch("https://tcsuiphcndrbsdztlwdq.supabase.co/rest/v1/quiz-questions", {
        method: 'GET',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjc3VpcGhjbmRyYnNkenRsd2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMTY1MDUsImV4cCI6MjA1Nzc5MjUwNX0.MTP4Dm1fPe6pKyVAP3oFEYYgMrRubdpLlDzBfTbUxT4',
          'Content-Type': 'application/json',
          'Accept': 'application/json',  // Ensure we get JSON response
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch quiz data');
      }

      const data = await response.json();
      console.log(data);
      setQuizData(data);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  useEffect(() => {
    fetchQuizData(); // Fetch the quiz data when the app is first loaded
  }, []);

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
    }
  }, [questionNumber]);

  // Reset the game
  const resetGame = () => {
    setStop(false);
    setQuestionNumber(1);
    setEarned('R 0');
    setUsername(username); // Keeps the username when reset
  };

  // Go to homepage
  const homepage = () => {
    setStop(false);
    setQuestionNumber(1);
    setEarned('R 0');
    setUsername(null); // Clears username, showing the start screen
  };

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <div className="endText">
                <h1>You earned: {earned}</h1>
                <button className="startAgainButton" onClick={resetGame}>
                  Start Again
                </button>
                <button className="startAgainButton" onClick={homepage}>
                  Home Page
                </button>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={quizData} // Passing the fetched quiz data to the Quiz component
                    setStop={setStop} 
                    setEarned={setEarned}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} key={m.id}>
                  <span className="moneyListNumber">{m.id}</span>
                  <span className="moneyListAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
