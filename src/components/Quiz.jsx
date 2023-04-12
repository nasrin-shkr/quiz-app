import React, { useState } from 'react';
import { quiz } from '../API/Questions';
import Button from './Button';
import SelectCmp from './SelectCmp';
import RadioSelection from './RadioSelection';

const Quiz = () => {
  //Javascript array starts from index 0, so activeQuestion initial state is 0.
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  console.log(quiz.totalQuestions)
  const { questions } = quiz;
  // destructuring
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    if (activeQuestion === questions.length - 1){
      return;
    } 
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    
  };
  const onClickPrev = () => {
    if (activeQuestion === 0) {
      // If the user is on the first question, do nothing
      return;
    }
  
    // Decrement the active question index
    setActiveQuestion((prev) => prev - 1);
  
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score - 5,
            correctAnswers: prev.correctAnswers - 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers - 1 }
    );
  };
  console.log(activeQuestion);
    console.log(selectedAnswer);
    console.log(result);

  //   const onAnswerSelected = (answer) => {
  //     if (answer === correctAnswer) {
  //       setSelectedAnswer(true);
  //       console.log('right');
  //     } else {
  //       setSelectedAnswer(false);
  //       console.log('wrong');
  //     }
  //   };
  return (
    <div className='w-1/2 h-1/2 bg-orange-600 flex flex-col'>
      <h1 className="bg-red-500 text-center text-lg my-5">Quiz</h1>
      <h2 className="text-base my-3 bg-yellow-300">{question}</h2>
      <RadioSelection options={choices} />
      <div className='w-full bg-slate-300 flex justify-between'>
      <Button className={'bg-red-500 '} title="Next" onClick={onClickNext}   disabled={activeQuestion === questions.length - 1} />
      <Button className={'bg-red-500 '} title="previous" onClick={onClickPrev}   disabled={activeQuestion === 0} />
      </div>
    </div>
  );
};

export default Quiz;
