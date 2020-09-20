import React from 'react';
import './App.css';

import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
