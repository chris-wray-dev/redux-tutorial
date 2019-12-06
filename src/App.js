import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import Counter from './Components/Counter';
import Articles from './Components/Articles';
import rootReducer from './rootReducer';



const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Articles />
    </Provider>
  );
}

export default App;
