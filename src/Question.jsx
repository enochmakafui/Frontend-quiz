import { useState } from 'react';
import Options from './Options';
import Progress from './Progress';

function Question({ question, index, numQuestions, dispatch, answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  function handleSelectAnswer(option) {
    setError(false);
    setSelectedAnswer(option);
  }
  function submitHandler() {
    if (!selectedAnswer) {
      setError(true);
      return;
    } else {
      setError(false);
      dispatch({ type: 'submitAnswer', payload: selectedAnswer });
      setSubmit(true);
    }
  }

  return (
    <div className='screen'>
      <p className='question-count'>
        Question {index + 1} of {numQuestions}
      </p>

      <p className='question'>{question.question}</p>

      <Options
        options={question.options}
        selectedAnswer={selectedAnswer}
        answer={answer}
        submit={submit}
        correctAnswer={question.answer}
        onSelect={handleSelectAnswer}
      />
      <Progress max={numQuestions} value={index + 1} />
      <div className='btn-container'>
        {error && (
          <p className='error'>
            {' '}
            <span>
              <img src='/assets/images/icon-error.svg' alt='error icon' />
            </span>{' '}
            Please select an answer
          </p>
        )}
        {answer ? (
          <button
            className='submit-btn'
            onClick={() => {
              dispatch({ type: 'nextQuestion' });
              setSelectedAnswer(null);
              setSubmit(false);
            }}
          >
            Next Question
          </button>
        ) : (
          <button className='submit-btn' onClick={submitHandler}>
            Submit answer
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
