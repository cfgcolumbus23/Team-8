import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(5).fill('')); // Adjust the number of questions as needed
  const questions = [
    'Question 1: What is the capital of France?',
    'Question 2: What is 2 + 2?',
    'Question 3: Who wrote "Romeo and Juliet"?',
    'Question 4: What is the largest planet in our solar system?',
    'Question 5: What is the chemical symbol for water?',
  ]; // Add your questions here

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // You can add validation logic here if needed.
    // Once the user clicks "Submit," redirect to the lesson page.
    navigate('/Lessons');
  };

  return (
    <div className="QuizPage">
      <h1>Quiz</h1>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>
            {question}
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </li>
        ))}
      </ol>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuizPage;
