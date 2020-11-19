import React, {useState} from 'react';
import '../App.css';
import {Input,Button} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { Container, Row, Col } from 'reactstrap';
import Logo from '../assets/logo3.png'

function ScreenLog(props) {

// -----------------------------------event création ----------------------------------------------
 const [errorMessage, setErrorMessage] = useState(false);
 const [eventName, setEventName] = useState('');
 const [eventPasswordC, setEventPasswordC] = useState('');
 const [eventID, setEventID] = useState('')
 const [pseudoC, setPseudoC] = useState('');

 var handleEventCreation = async () => {

       var rawResponse = await fetch('http://192.168.0.17:3000/eventcreation', {
             method: 'POST',
             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
             body: `eventNameFromFront=${eventName}&eventPasswordFromFront=${eventPasswordC}&idUserFromFront=${props.hostId}&pseudoFromFront=${pseudoC}`
       })

       var response = await rawResponse.json();
       console.log('response', response)
       console.log("id event", response.saveEvent.eventId);
       

       if (response.result === true) {
             console.log('true')
             var ID = response.saveEvent.eventId
             console.log('ID', ID)
             setEventID(ID)
             
            //  props.onSettingEventName(eventName), props.onSettingPassword(eventPassword), //props.onSettingIdEvent(eventID)//
            
             props.navigation.navigate('SongListCreation')
             

       } else {
             setErrorMessage(true)
       }
 }

// --------------------------------- enregistrement invité -----------------------------------------
const [pseudo, setPseudo] = useState('');
const [eventPassword, setEventPassword] = useState('');
const [eventId, setEventId] = useState('');
const [errorMessageE, setErrorMessageE] = useState(false);

var handleEnregistrement =  async () => {
  var rawResponse = await fetch('http://192.168.1.35:3000/enregistrement', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `eventIdFromFront=${eventId}&eventPasswordFromFront=${eventPassword}&pseudoFromFront=${pseudo}`
  })
  
  var response = await rawResponse.json();
  
  
  console.log("response", response)


  
  if (response.result === true) {
  
    console.log('true', true)
  
    

  } else {
    setErrorMessageE(true)
    console.log('Login Failed')
  }
    }
  
    var logInDeniedE
  
    if (errorMessageE === true) {
      logInDeniedE = <p>erreur</p>
      // <Badge status="error" badgeStyle={{ color: 'white', backgroundColor: '#FF0060' }} value="Nom et/ou Mot de Passe Incorrect(es)"></Badge>
    }




  return (

    <Container className="themed-container body" fluid>
    
    <div className='nav-header'>
      {/*   className="nav-header" */}

            <img src={Logo} width='300' className="d-inline-block align-top mls mts mbs" alt="logo" />
     
    </div>
    
    <div className="Login-page grid">
      <div className='col-m-12 txt-center' >
        <h1 className=' txt-white plm prm mtm'>Bienvenue chez Everyone is the Dj </h1>
        <p className='txt-white h3-like'>Prêt à faire la fête ? </p>
      </div>

          {/* inscription */}

   
          <div>
            <div className='Sign'>
                  <p className='h4-like mts'>Créer une nouvelle soirée</p>
                  
                  <Input className="Login-input" placeholder="max"
                    onChange={(text) => setPseudoC(text.target.value)}
                    value={pseudoC} />
                  <Input className="Login-input" placeholder="1234"
                    onChange={(text) => setEventName(text.target.value)}
                    value={eventName} />
                  <Input className="Login-input" placeholder="password"
                    onChange={(text) => setEventPasswordC(text.target.value)}
                    value={eventPasswordC} />
            
                  <Link to="/ScreenHome">
                  <Button 
                  onClick={() => handleEventCreation()} 
                  type="primary" className='button'>Créer</Button></Link>
            </div>
          </div>

          {/* connexion */}
          <div>
            <div className='Sign'>
                  <p className='h4-like mts'>Rejoindre une soirée</p>
                  <Input className="Login-input" placeholder="max"
                      onChange={(text) => setPseudo(text.target.value)}
                      value={pseudo} />
                  <Input className="Login-input" placeholder="1234"
                      onChange={(text) => setEventId(text.target.value)}
                      value={eventId} />
                  <Input className="Login-input" placeholder="password"
                      onChange={(text) => setEventPassword(text.target.value)}
                      value={eventPassword} />
            
                  <Link to="/ScreenHome">
                  <Button 
                  onClick={() => handleEnregistrement()} 
                  type="primary" 
                  className='button'>Rejoindre</Button></Link>
            </div>

          </div>

      </div>
    </Container>
  );
}

export default ScreenLog;
