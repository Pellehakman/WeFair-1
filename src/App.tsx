import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import jsonData from './data/data.json'
import { nanoid } from 'nanoid'
import useLocalStorage from './components/hooks/use-local-storage';



const App = () => {

// const [allUsers, setAllUsers] = useState<any>([])
const [debt, setDebt] = useState<any>()
// const [allPayers, setAllPayers] = useState<any>([])

const [allPayers, setAllPayers] = useLocalStorage<any[]>('matches', [])

console.log(...allPayers)
// console.log(JSON.stringify(allUsers))

// const createUser = () => {
//   let payer = {
//     payerID: nanoid(),
//     payerAmount: Math.floor(Math.random()* 100)
//   }
//   setAllUsers([...allUsers, payer])
// }

//hämtar all data från jsonData
let data = jsonData


const AllPayers = () => {
  setAllPayers(data)

}


//displayar alla userAmount
let singleUserTotal = data.map((user) => <p key={user.payerID}>payerID:{user.payerID} har satt in{user.payerAmount}kr</p>);

// räknar ut totalt med användare
let counter = Object.keys(data).length;
// console.log(counter)

//räknar ut all "userAmount" som ligger i jsonData
const allPayerTotal = data.map((obj) => obj.payerAmount);
function sum(user: any) {
  let sum = 0;
  for (let data in user) {
      if (user.hasOwnProperty(data)) {
          sum += parseFloat(user[data]);
      }
  }
  return sum;
}

let summed = sum(allPayerTotal);
// console.log(summed)


  let user = {
    userID: 'o9GWhxYltwpt7ogUHaw16',
    userDebt: 5000
  }













  return (
    
    <div className="App"> 
      {/* <button onClick={createUser}>click</button>       */}
      <h1>Vite + React</h1>
      {/* <button className='debt-btn' onClick={getUser}>klicka här för att hämta dina skulder</button> */}
           <button className='debt-btn' onClick={AllPayers}>get JSON to STATE</button>
      <p>din totala skuld {debt}</p>
      <div className='info'>{summed} SEK total av totalt {counter} användare</div>
      <div className='all-total'>{singleUserTotal}</div>
    </div>
  )
}

export default App
