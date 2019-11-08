import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> 85572ccfc8cbed52ee80e08641356991bf18a83c
