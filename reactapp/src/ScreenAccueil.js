import React from 'react';
import './App.css';
import {Input,Button, Icon} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav'


function ScreenAccueil() {

  return (
    <div >
         <Nav/>
        <div className="Banner"/>
          <p>Hello accueil</p>

    </div>
  );
}

export default ScreenAccueil;
