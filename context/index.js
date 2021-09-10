// import
import { createContext, useReducer } from 'react';
// ! below import is not in the downloaded docs...
import firebase from '../firebase';
// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// initial state
const intialState = {
  user: null,
};

// create context
const Context = createContext({});

// context provider
const Provider = ({ children }) => {
  console.log('MY CUSTOM PROVIDER IS ACTIVATED.');
  const [state, dispatch] = useReducer(reducer, intialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
