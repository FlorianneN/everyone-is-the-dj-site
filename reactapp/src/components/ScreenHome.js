import React , { useState, useEffect, useRef }  from 'react';
import '../App.css';
import ReactDOM from "react-dom";
import {Input,Button, BackTop, Radio} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav.js'
import { Container, Row, Col } from 'reactstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Countdown, { zeroPad } from 'react-countdown';




// ---------------------Return screenhome
function ScreenHome(props) {
// ---------------------Return screenhome


  const [SONGchosen, setSONGchosen] =  useState('')
  const [titrePropose, setTitrePropose] = useState()
  const [titreList, setTitreList] = useState([]);
  const [TIMER, setTIMER] = useState(0);
  // const [playlist, setPlaylist] = useState([])

  var playlist = [
      {titre:'Maroon 5 - This Love'},
      {titre:'No Doubt - Dont Speak'},
      {titre:'Oasis - Wonderwall'},
      {titre:'Pink Floyd - Another Brick In The Wall'}
  ]


  var getChecked = async (value) => {
    setSONGchosen(value)
    // console.log('console log value ->', value)
    // console.log('console log SONGchosen 1 ->', SONGchosen)
  }

  // ---------------------TIMER-------------------------
  var handleInitTimer = async () => {

    setTIMER(6000)
    //APPEL AU BACKEND//

    // var rawResponse = await fetch('http://192.168.1.35:3000/initTimer20', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `idUserFromFront=${props.hostId}`
    // })

    // var response = await rawResponse.json();

    

    // console.log(response);
  
  }

const Completionist = () => {
  return(
        <div className='mtm' style={{justifyContent:'stretch', textAlign:'center'}}>
          <p className='h4-like mts mbs text-center'>Ils ont gagné !!</p>
          <div  style={{width:'100%'}}>
            <div className='mbs' style={{ display:"flex"}}>
              <p className='mrs'>1. Red Hot Chili pepers - Snow</p>
              <Button className='btn--secondary' onClick={() => btnClick1()}>Lancer le titre</Button>
            </div>
            <div className='mbs' style={{ display:"flex"}}>
              <p className='mrs'>2. Shakira - Waka Waka</p>
              <Button className='btn--secondary' onClick={() => btnClick2()}>Lancer le titre</Button>
            </div>
            <div className='mbs' style={{ display:"flex"}}>
              <p className='mrs'>3. Avicii - Hey Brother</p>
              <Button className='btn--secondary' onClick={() => btnClick3()}>Lancer le titre</Button>
            </div>
          </div>
        </div>
    )
};


const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
      return <Completionist />;
}
else {

  return (
    <div>
      <p className='h4-like mts mbs text-center'>Temps restant pour voter !</p>
      <span className='timer'>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
    </div>
  )
}
};


  //-------------------- BOUCLE QUI AFFICHE LES TITRES DU VOTER
  var voteList = []
  for (let i = 0; i < playlist.length; i++) {
    voteList.push(<RadioButton key={i} iconName={"lens"} label={playlist[i].titre} value={playlist[i].titre} pointColor={'#E59622'}/>)
  }

  var handleAjouter = async() => {
    
    console.log(titrePropose)

    setTitreList([...titreList, titrePropose])

    var rawResponse = await fetch('http://192.168.1.35:3000/proposition-des-titres', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `titreFromFront=${titrePropose}`
        })
    var response = await rawResponse.json();
}

// ----------------- Ajout titre input ------------------------
var list = titreList.map((titre, i)=>{
  return(
      <div key={i} style={{justifyContent:'center', alignItems: 'center'}}>
          <p className='h6-like' style={{ color:'#E59622'}}>{titre}</p>
      </div>
  )
})


var handleValidationList = async () => {
  const SONGdata = await fetch('http://192.168.1.35:3000/voteguest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `titreFromFront=${SONGchosen}&idUserFromFront=${props.hostId}&tokenFromFront=${props.token}`
    })
    var SONG = await SONGdata.json();
    props.navigation.navigate("Validationvote")
}

//------------------- Redirection lien gagnant --------------

var btnClick1 = async() => {
  window.open(`https://www.youtube.com/results?search_query=Red Hot Chili pepers - Snow`)
}
var btnClick2 = async() => {
  window.open(`https://www.youtube.com/results?search_query=Shakira - Waka Waka`)
}
var btnClick3 = async() => {
  window.open(`https://www.youtube.com/results?search_query=Avicii - Hey Brother`)
}

//----------------------------------------//
//-----------------RENDER----------------
//----------------------------------------//
  return (
    
     <Container className="themed-container body" fluid>
    
      <Nav/>
     
     
      <div className="Login-page grid">
        
        
        <div className='col-m-12 txt-center' >
          <p className=' txt-white plm prm mtm h1-like'>Bienvenue <span className='h6-like txt-pink'>Bob </span></p>
          <p className=' txt-white plm prm mtm h1-like' > à la soirée <span className='h6-like txt-purple'>Fiévre du vendredi soir</span></p>
        </div>


{/* -------------------------Box mes amis ------------------------------------------ */}

        <div className='col-m-12 col-t-6 col-d-4 box-1'>
          <div className='grid' style={{width:'75%', justifyContent: 'center', alignItems: 'baseline' }}>
            <div  className='col-m-12 col-d-5'>
              <p className='h4-like mts'>Mes amis en ligne</p>
              <ul>
                <li className='mbs'>Bob</li>
                <li className='mbs'>Marcel</li>
                <li className='mbs'>Robert</li>
                <li className='mbs'>Liliane</li>
                <li className='mbs'>Georges</li>
              </ul>
             </div>
             <div className='col-m-12 col-d-5 text-center'>
                  <p className='h4-like txt-purple'>ID de l'évènement : </p>
                  <p className='text-center'> 4518 </p>
                  <p className='h4-like txt-purple'>Mot de passe de l'évènement : </p>
                  <p className='text-center'> Anniv Maxou</p>
                  <button className='button mtm'  
                  // onClick={() => Clipboard.setString(`Ce soir, avec Everyone is the DJ. \n ID de l'évènement : \n 4518 \n Mot de passe de l'évènement : \n annivMax` )}
                  >Copier les infos</button>
             </div>
          </div>
            
        </div>

{/* -------------------------BOX Du TIMER & Winner ------------------------------------------ */}

      <div  className='col-m-12 col-t-6 col-d-4 box-1'>
        <div style={{maxWidth:'100%', display:"flex"}}>
          <div className='' style={{textAlign:'center'}}>
            
        
          
          
          {TIMER > 0 && (
                <Countdown
                  date={Date.now() + TIMER}
                  renderer={renderer}
                  
                >
                </Countdown>
              )
              }
             
          <button className='btn--third mtm'
              onClick={() => handleInitTimer()}> Lancer le TIMER</button>
          
          </div>
        </div>
      </div>







{/* -------------------------BOX DE VOTE ------------------------------------------ */}


        <div className='col-m-12 col-t-6 col-d-4 box-1'>
          <p className='h4-like mts'>Je vote pour mon titre favoris</p>
        
            <RadioGroup getChecked={getChecked}>
            {/* containerStyle="options-container" */}
              {voteList}
            </RadioGroup>
            
            <Button className='btn--third mts'
              // onPress={() => handleVoteGuest()}

            >Valider mon vote</Button>
        </div>

{/* ------------------------- Box AJOUT DE TITRE ------------------------------------------ */}

        <div className='col-m-12 col-t-6 col-d-4 box-1' style={{justifyContent: 'start', alignItems: 'center'}}>
            <p className='h4-like mts'>J'ajoute mes propositions de titres</p>
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    {list}
            </div>

            <div style={{flexDirection:'row', textAlign:'center', width:'100%'}}>
              <Input 
                placeholder="Artiste-titre"
                className='Login-input' 
                onChange={(e) => setTitrePropose(e.target.value)}
                value={titrePropose}/>
              <Button className='btn--secondary' onClick={()=> handleAjouter()}>+</Button>
            </div>
            
            
            <Button className='btn--third'
              onPress={() => handleValidationList()}

            >Envoyer ma liste</Button>
        </div>



        
      
        {/* <BackTop>
          <div className='totop btn--secondary'>Top</div> 
          </BackTop>*/}
      
      </div>
     </Container>
  );
}


export default ScreenHome;
