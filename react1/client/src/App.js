import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './components/pages/Home';
import Notes from './components/pages/Notes';
import CreateNote from './components/pages/CreateNote'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/notes' component={Notes}/>
        <Route exact path='/createnote' component={CreateNote}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
