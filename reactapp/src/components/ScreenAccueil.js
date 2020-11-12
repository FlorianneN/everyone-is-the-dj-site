import React from 'react';
import '../App.css';
import {Input,Button} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { Container, Row, Col } from 'reactstrap';
import Logo from '../assets/logo3.png'

function ScreenConnexion() {

  return (
    <Container className="themed-container body" fluid>
    
    <div className='nav-header'>
      {/*   className="nav-header" */}

            <img src={Logo} width='300' className="d-inline-block align-top mls mts mbs" alt="logo" />
     
    </div>
    
    <div className="Login-page grid mtm">
      <div className='col-m-12 txt-center' >
        <h1 className=' txt-white plm prm'>Bienvenue chez Everyone is the Dj </h1>
        <p className='txt-white h3-like'>Prêt à faire la fête ? </p>
      </div>

          {/* inscription */}

   
          <div>
            <div className='Sign'>
                  <p className='h4-like mts'>Créer une nouvelle soirée</p>
                  
                  <Input className="Login-input" placeholder="max" />
                  <Input className="Login-input" placeholder="soirée max" />
                  <Input className="Login-input" placeholder="password" />
            

                  <Button href="/ScreenHome" type="primary" className='button'>Créer</Button>
            </div>
          </div>

          {/* connexion */}

   
          <div>
            <div className='Sign'>
                  <p className='h4-like mts'>Rejoindre une soirée</p>
                  <Input className="Login-input" placeholder="max" />
                  <Input className="Login-input" placeholder="soirée max" />
                  <Input className="Login-input" placeholder="password" />
            

                  <Button href="/ScreenHome" type="primary" className='button'>Rejoindre</Button>
                  {/* <Link to="/screensource"> */}
            </div>

          </div>

      </div>
    </Container>
  );
}

export default ScreenConnexion;
