import DarkMode from './DarkMode';
import WelcomeScreen from './WelcomeScreen';
import Question from './Question';
import Results from './Results';
import { useEffect, useReducer } from 'react';
import data from '../data/data.json';

const initialState = {
  title: null,
  quiz: null,
  index: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setTitle':
      return {
        ...state,
        title: action.payload,
        quiz: data.quizzes.filter((d) => d.title === action.payload).at(0),
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'submitAnswer':
      return {
        ...state,
        answer: action.payload,
        score:
          state.quiz.questions.at(state.index).answer === action.payload
            ? state.score + 1
            : state.score,
      };
    case 'restart':
      return initialState;
  }
}

function getInitialState() {
  const savedState = localStorage.getItem('quiz');
  return savedState ? JSON.parse(savedState) : initialState;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);

  const question = state.quiz?.questions.at(state.index);
  const numQuestions = state.quiz?.questions.length;

  useEffect(
    function () {
      localStorage.setItem('quiz', JSON.stringify(state));
    },
    [state]
  );

  return (
    <div>
      <DarkMode quiz={state.quiz} />
      {!state.title && <WelcomeScreen dispatch={dispatch} />}

      {state.index !== numQuestions && state.title && (
        <Question
          question={question}
          index={state.index}
          numQuestions={numQuestions}
          dispatch={dispatch}
          answer={state.answer}
        />
      )}

      {state.index === numQuestions && (
        <Results quiz={state.quiz} score={state.score} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
