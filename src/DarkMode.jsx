import { useEffect, useState } from 'react';

function DarkMode({ quiz }) {
  const [darkMode, setDarkMode] = useState(function () {
    const storedValue = localStorage.getItem('mode');
    return storedValue ? JSON.parse(storedValue) : false;
  });


  useEffect(
    function () {
      if (darkMode) document.body.classList.add('dark-mode');
      else document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', JSON.stringify(darkMode));
    },
    [darkMode]
  );

  return (
    <div className='dark-mode-box'>
      <div className='logo'>
        {quiz ? (
          <>
            <div className={`${quiz.title.toLowerCase()}-icon quiz-icon`}>
              <img src={quiz.icon} alt='html logo' />
            </div>
            <h2>{quiz.title}</h2>
          </>
        ) : (
          ''
        )}
      </div>
      <div className='dark-mode-switch'>
        <img
          src={`${
            darkMode
              ? '/assets/images/icon-sun-light.svg'
              : '/assets/images/icon-sun-dark.svg'
          } `}
          alt='icon sun dark'
        />
        <label className='switch'>
          <input
            type='checkbox'
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className='slider'></span>
        </label>
        <img
          src={`${
            darkMode
              ? '/assets/images/icon-moon-light.svg'
              : `assets/images/icon-moon-dark.svg`
          }`}
          alt='icon moon dark'
        />
      </div>
    </div>
  );
}

export default DarkMode;
