import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { Container,Row,Col, Button} from 'reactstrap';
import Logo from '../assets/logo3.png'


function Nav() {


  return (
   <Container>
    <div className='nav-header grid'>

            <div className='col-d-3'><img src={Logo} width='300' className="d-inline-block align-top mls mts mbs" alt="logo" /></div>
            
            <div className='col-d-8 txt-right'>
            <Button href='/' className='nav-menu' >Déconnexion</Button>
            </div>
    </div>
  </Container>
  );
}

export default Nav;
