import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    // <div className="App">
    <div className="bg-green-400 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Quiz />
    </div>
  );
}

export default App;
