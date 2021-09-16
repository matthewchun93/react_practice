import './App.css';
import AddItem from './components/pages/AddItem';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ShowItems from './components/pages/ShowItems';
// import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/additem" component={AddItem} />
        <Route path="/showitems" component={ShowItems} />
      </Switch>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
