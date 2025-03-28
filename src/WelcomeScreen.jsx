function WelcomeScreen({ dispatch }) {
  return (
    <div className='screen'>
      <div>
        <h1>
          <span className='light-heading'>Welcome to the</span> Frontend Quiz!{' '}
        </h1>
        <p>please pick a subject to start</p>
      </div>

      <ul className='quiz-lists'>
        <li>
          <button
            className='quiz-list'
            onClick={() => dispatch({ type: 'setTitle', payload: 'HTML' })}
          >
            {' '}
            <span className='quiz-icon html-icon'>
              {' '}
              <img src='/assets/images/icon-html.svg' alt='html icon' />{' '}
            </span>
            HTML
          </button>
        </li>
        <li>
          <button
            className='quiz-list'
            onClick={() => dispatch({ type: 'setTitle', payload: 'CSS' })}
          >
            <span className='quiz-icon css-icon'>
              <img src='/assets/images/icon-css.svg' alt='css icon' />
            </span>
            CSS
          </button>
        </li>
        <li>
          <button
            className='quiz-list'
            onClick={() =>
              dispatch({ type: 'setTitle', payload: 'JavaScript' })
            }
          >
            <span className='quiz-icon javascript-icon'>
              <img src='/assets/images/icon-js.svg' alt='javascript icon' />
            </span>
            JavaScript
          </button>
        </li>
        <li>
          <button
            className='quiz-list'
            onClick={() =>
              dispatch({ type: 'setTitle', payload: 'Accessibility' })
            }
          >
            <span className='quiz-icon accessibility-icon'>
              <img
                src='/assets/images/icon-accessibility.svg'
                alt='accessibility icon'
              />
            </span>
            Accessibility
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WelcomeScreen;
