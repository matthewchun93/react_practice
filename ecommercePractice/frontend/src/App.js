import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//Pages
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
