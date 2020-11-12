import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { Container,Row,Col} from 'reactstrap';
import Logo from '../assets/logo3.png'


function Nav() {


  return (
   <Container>
    <div className='nav-header'>
      {/*   className="nav-header" */}

            <img src={Logo} width='300' className="d-inline-block align-top mls mts mbs" alt="logo" />
      
            <Link href='/ScreenConnexion' className='nav-menu' >Logout</Link>
    </div>
  </Container>
  );
}

export default Nav;
