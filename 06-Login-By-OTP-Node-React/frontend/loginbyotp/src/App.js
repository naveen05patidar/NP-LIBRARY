import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import {Route, Link, } from 'react-router-dom';
import Login from './Screens/Home';


function App() {
  return (
    <div>
      
      <Routes >
        <Route exact path="/" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
