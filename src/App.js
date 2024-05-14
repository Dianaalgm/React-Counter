import './App.css';

// //1. Import useReducer
// import React, {useReducer} from 'react';

// //2. Make my Reducer that alligns with initial state

// const reducer= (state,action)=> {
//   //{Think of this as a playbook of all actions based on scenario}

//   switch (action,type) {
//     case value:
      
//     break;
//     //---------------[*represents a possible action that can happen agaisnt our state val
    
//     case value:
      
//     break;
//     //---------------[*represents a possible action that can happen agaisnt our state val
//     case value:
      
//     break;
//     //---------------[*represents a possible action that can happen agaisnt our state val
    
//     default:
//       return state
//   }
// //This is where the switch statement goes
import React, { useReducer } from 'react';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// App component
const App = () => {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handlers
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
