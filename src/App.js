import './App.css';
import { QuestionsTracker } from './components/QuestionsTracker';
import Quiz from './components/Quiz';

function App() {
  return (
    // <div className="App">
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Quiz />
      <QuestionsTracker questionsNumber={10} />
    </div>
  );
}

export default App;
