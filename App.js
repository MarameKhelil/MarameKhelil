import Navbar  from './components/navbar';
import './App.css';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import Home from './components/pages/home'
 
function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
    </Router>
  );
}

export default App;
