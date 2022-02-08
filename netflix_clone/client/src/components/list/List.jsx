import React from 'react';

// icons
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';

// styles
import './list.scss';

// components
import ListItem from '../listItem/ListItem';

const List = () => {
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem /> 
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" />
      </div>
    </div>
  ) 
};

export default List;
