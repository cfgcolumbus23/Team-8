import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(5).fill('')); // Adjust the number of questions as needed
  const questions = [
    'Question 1: What is a CPU?',
    'Question 2: What is a mouse and trackpad used for?',
    'Question 3: What is a monitor?',
    'Question 4: What is bluetooth?',
    'Question 5: What is local hotspot?',
  ]; // Add your questions here

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // You can add validation logic here if needed.
    // Once the user clicks "Submit," redirect to the lesson page.
    navigate('/lessons');
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
