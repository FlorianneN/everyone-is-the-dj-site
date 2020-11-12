import React from 'react';
import './App.css';
import {Input,Button} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { Container, Row, Col } from 'reactstrap';

function ScreenConnexion() {

  return (
    <Container className="themed-container body" fluid={true} >
    
    <Nav/>
    
    

   
    <Row xs="12" className="Login-page">
      <Col >
        <h1 className='text-center txt-white'>Bienvenu chez Everyone is the Dj </h1>
        <p className='text-center txt-white h3-like'>Prêt à faire la fête ? </p>
      </Col>

          {/* inscription */}

          <Col className="Sign">
                  <p className='h4-like mts'>Créer une nouvelle soirée</p>
                  
                  <Input className="Login-input" placeholder="max" />
                  <Input className="Login-input" placeholder="soirée max" />
                  <Input className="Login-input" placeholder="password" />
            

                  <Button href="/ScreenHome" type="primary" className='button'>Créer sa soirée</Button>
          </Col>

          {/* connexion */}

          <Col className="Sign">
                  <p className='h4-like mts'>Rejoindre une soirée</p>
                  <Input className="Login-input" placeholder="max" />
                  <Input className="Login-input" placeholder="soirée max" />
                  <Input className="Login-input" placeholder="password" />
            

                  <Button href="/ScreenHome" type="primary" className='button'>Rejoindre la soirée</Button>
                  {/* <Link to="/screensource"> */}

          </Col>

      </Row>
    </Container>
  );
}

export default ScreenConnexion;
