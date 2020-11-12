import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import {Menu, Icon} from 'antd'
import { 
  Container,
  Row,
  Col,
  Button,
  NavItem,
  NavLink,
} from 'reactstrap';

function Nav() {


  return (
   <Container>
    <Row  className="nav-header">
      <Col>
            <img src="./assets/logo3.png" width='300' className="d-inline-block align-top mls mts" alt="logo" />
      </Col>
      <Col>
            <a href='/ScreenConnexion' className='nav-menu ul-clean'>Connexion</a>
      </Col>
    
    </Row>
  </Container>
  );
}

export default Nav;
