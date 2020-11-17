import React , { useState, useEffect }  from 'react';
import '../App.css';
import {Input,Button, BackTop, Radio} from 'antd';
import {Link} from 'react-router-dom'
import Nav from './Nav.js'
import { Container, Row, Col } from 'reactstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


function ScreenHome() {

  const [SONGchosen, setSONGchosen] =  useState('')
  const [titrePropose, setTitrePropose] = useState()
  const [titreList, setTitreList] = useState([]);
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

  //-------------------- BOUCLE QUE AFFICHE LES TITRES DU VOTER
  var voteList = []
  for (let i = 0; i < playlist.length; i++) {
    voteList.push(<RadioButton key={i} iconName={"lens"} label={playlist[i].titre} value={playlist[i].titre} />)
  }

  var handleAjouter = async() => {
    
    console.log(titrePropose)

    setTitreList([...titreList, titrePropose])

    var rawResponse = await fetch('http://192.168.0.17:3000/proposition-des-titres', {
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
          <p className='h6-like' style={{ color:'rgb(140, 185, 253)'}}>{titre}</p>

      </div>
  )
})


  return (
    
     <Container className="themed-container body" fluid>
    
      <Nav/>
     
     
      <div className="Login-page grid">
        
        
        <div className='col-m-12 txt-center' >
          <p className=' txt-white plm prm mtm h1-like'>Bienvenue <span className='h6-like txt-pink'>Bob </span></p>
          <p className=' txt-white plm prm mtm h1-like' > à la soirée <span className='h6-like txt-purple'>Fiévre du vendredi soir</span></p>
        </div>



{/* -------------------------BOX Du TIMER ------------------------------------------ */}

      <div  className='col-m-12 col-t-6 col-d-4 box-1'>
        TIMER
      </div>


{/* ------------------------- BOX DU WINNER ------------------------------------------ */}


      <div className='col-m-12 col-t-6 col-d-4 box-1'>

        <Button className='btn--third'>Rafraichir</Button>
        <p>OU</p>
        <div>
          <p className='h4-like mts mbs text-center'>Ils ont gagné !!</p>
      
          <div className='mbs' style={{width:'100%', justifyContent:'center', alignItems:'baseline', display:"flex"}}>
            <p className='mrs'>1. Red Hot Chili pepers - Snow</p>
            <Button className='btn--secondary'>Lancer le titre</Button>
          </div>
          <div className='mbs' style={{width:'100%', justifyContent:'center', alignItems:'baseline', display:"flex"}}>
            <p className='mrs'>1. Red Hot Chili pepers - Snow</p>
            <Button className='btn--secondary'>Lancer le titre</Button>
          </div>
          <div className='mbs' style={{width:'100%', justifyContent:'center', alignItems:'baseline', display:"flex"}}>
            <p className='mrs'>1. Red Hot Chili pepers - Snow</p>
            <Button className='btn--secondary'>Lancer le titre</Button>
          </div>
        </div>  
        
     
      </div>




{/* -------------------------BOX DE VOTE ------------------------------------------ */}


        <div className='col-m-12 col-t-6 col-d-4 box-1'>
          <p className='h4-like mts'>Je vote pour mon titre favoris</p>
           {/* <RadioGroup getChecked={getChecked} RadioGroupStyle={{ flex: 1, flexDirection: 'column', marginBottom: '10%', marginLeft: '5%' }} IconStyle={{ backgroundColor: '#FF0060' }} coreStyle={{ backgroundColor: '#FF0060' }} labelStyle={{ color: 'white', fontSize: 18 }} > */}
            <RadioGroup getChecked={getChecked} containerStyle="options-container">
              {voteList}
            </RadioGroup>
            
            <Button className='btn--third mts'
              // onPress={() => handleVoteGuest()}

            >Valider mon vote</Button>
        </div>

{/* -------------------------AJOUT DE TITRE ------------------------------------------ */}

        <div className='col-m-12 col-t-6 col-d-4 box-1' style={{justifyContent: 'start', alignItems: 'center'}}>
            <p className='h4-like mts'>Je choisis mes futurs titres</p>
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    {list}
            </div>

            <div style={{flexDirection:'row'}}>
              <Input 
                placeholder="Artiste-titre"
                className='Login-input' 
                onChange={(e) => setTitrePropose(e.target.value)}
                value={titrePropose}/>
              <Button className='btn--secondary' onClick={()=> handleAjouter()}>+</Button>
            </div>
            
            
            <Button className='btn--third'
              // onPress={() => handleVoteGuest()}

            >Envoyer ma liste</Button>
        </div>




        
        
      
        <BackTop>
          <div className='totop btn--secondary'>Top</div>
          {/* <i style={style}class="fas fa-chevron-up fa-2x"></i> */}
        </BackTop>
      
      </div>
     </Container>
  );
}


export default ScreenHome;
