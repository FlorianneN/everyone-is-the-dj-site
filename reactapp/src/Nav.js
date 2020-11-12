import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import {Menu, Icon} from 'antd'
import { 
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Nav() {


  return (
    <Container>
    <nav>
      <span className="">
            <img src="./public/logo192.png" className="d-inline-block align-top" alt="logo" />
      </span>
          <NavItem>
            <NavLink style={{color:'white'}}>Connexion</NavLink>
          </NavItem>
          
      {/* <Menu style={{textAlign: 'center'}} mode="horizontal" theme="dark">

        <Menu.Item key="connexion">
          <Link to="/ScreenConnexion">
            <Icon type="home" />
            Connexion
          </Link>
        </Menu.Item>


        <Menu.Item key="app">
          <Link to="/">
            <Icon type="logout" />
            Logout
          </Link>
        </Menu.Item>

      </Menu> */}
    </nav>
    </Container>
  );
}

export default Nav;
