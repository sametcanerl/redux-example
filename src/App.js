import './App.css';

import Todo from './components/todo/Todo';
// import { createStore } from 'redux';
// import reducer from './redux';

import { Provider } from 'react-redux';
import { getStore } from './redux';

function App() {
  // const store = createStore(reducer);
  const store = getStore();
  return (
    <div className="app">
      <Provider store={store}>
       
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
