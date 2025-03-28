function Results({ quiz, score, dispatch }) {
  return (
    <div className='screen'>
      <div className='results-header'>
        <h1>
          <span className='light-heading '>Quiz completed</span> You scored...{' '}
        </h1>
      </div>
      <div className='results-score'>
        <div className='logo'>
          <div className={`${quiz.title.toLowerCase()}-icon quiz-icon`}>
            <img src={quiz.icon} alt='html logo' />
          </div>
          <h2 className='result-title'>{quiz.title}</h2>
        </div>
        <p className='result'>
          {' '}
          <span className='score'>{score}</span> out of {quiz.questions.length}
        </p>
      </div>
      <button
        className='submit-btn play-again'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Play again
      </button>
    </div>
  );
}

export default Results;
