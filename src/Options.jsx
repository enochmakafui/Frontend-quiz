function Options({
  options,
  selectedAnswer,
  onSelect,
  answer,
  correctAnswer,
  submit,
}) {
  return (
    <ul className='options '>
      {options.map((option, index) => (
        <li key={option}>
          <button
            className={`${
              selectedAnswer === option ? 'option-select' : ''
            } option`}
            onClick={() => onSelect(option)}
            disabled={submit}
          >
            <span className='option-icon'>
              {index + 1 === 1 && 'A'}
              {index + 1 === 2 && 'B'}
              {index + 1 === 3 && 'D'}
              {index + 1 === 4 && 'D'}
            </span>
            <span className='option-text'>{option}</span>

            {answer && option === correctAnswer && (
              <img
                src='/assets/images/icon-correct.svg'
                alt='correct icon'
                className='check-icon'
              />
            )}
            {answer && option !== correctAnswer && (
              <img
                src='/assets/images/icon-incorrect.svg'
                alt='correct icon'
                className='check-icon'
              />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Options;
