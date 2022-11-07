import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import jsonData from './data/data.json'
import { nanoid } from 'nanoid'
import useLocalStorage from './components/hooks/use-local-storage';
import Calc from './components/Calc/Calc'



const App = () => {

  // let data = jsonData



//displayar alla userAmount
// let singleUserTotal = data.map((user) => <p className='map' key={user.payerID}>
// payerID: {user.payerID}<br/>
// Saldo: {user.payerAmount}kr<br/>
// working: {user.working}<br/>
// workingFor: {user.workingFor}
// </p>);

// räknar ut totalt med användare
// let counter = Object.keys(data).length;
// console.log(counter)

//räknar ut all "userAmount" som ligger i jsonData

// console.log(summed)















  return (
    
    <div className="App"> 
    <Calc />
          
      {/* <h1>Vite + React</h1> */}
      {/* <button className='debt-btn' onClick={getUser}>klicka här för att hämta dina skulder</button> */}
           {/* <button className='debt-btn' onClick={AllPayers}>get JSON to STATE</button> */}
      {/* <p>din totala skuld {debt}</p> */}
      {/* <div className='info'>{summed} SEK total av totalt {counter} användare</div> */}
      {/* <div className='all-total'>
        
        
        </div> */}
    </div>
  )
}

export default App
