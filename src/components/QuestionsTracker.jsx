import React, { useState } from 'react';

export const QuestionsTracker = ({ questionsNumber }) => {
    const [questionsTracker, setQuestionsTracker]= useState([])
  return (
    <div className="bg-green-600">
      {questionsTracker.map((index) => {
        return <div key={index} className="rounded-full border-2">{index + 1}</div>;
      })}
      {questionsNumber}
    </div>
  );
};
