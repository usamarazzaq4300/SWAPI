import React , { useState } from 'react';
import "./App.css"
import Login from './components/login';
import {Search} from './components/search';
function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
