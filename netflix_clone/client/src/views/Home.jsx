import React from 'react';

//components
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';

//styles
import './home.scss'
import List from '../components/list/List';
const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <Featured type=""/>
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home;