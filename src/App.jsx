import DarkMode from './DarkMode';
import WelcomeScreen from './WelcomeScreen';
import Question from './Question';
import Results from './Results';
import { useReducer } from 'react';
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

function App() {
  const [{ title, quiz, index, answer, score }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const question = quiz?.questions.at(index);
  const numQuestions = quiz?.questions.length;

  return (
    <div>
      <DarkMode quiz={quiz} />
      {!title && <WelcomeScreen dispatch={dispatch} />}

      {index !== numQuestions && title && (
        <Question
          question={question}
          index={index}
          numQuestions={numQuestions}
          dispatch={dispatch}
          answer={answer}
        />
      )}

      {index === numQuestions && <Results quiz={quiz} score={score} dispatch={dispatch}/>}
    </div>
  );
}

export default App;
