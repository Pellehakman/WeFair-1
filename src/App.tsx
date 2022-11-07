import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import jsonData from './data/data.json'



const App = () => {

// const [allUsers, setAllUsers] = useState<any>([])
// console.log(JSON.stringify(allUsers))

// const createUser = () => {
//   let user = {
//     userID: Math.floor(Math.random()* 10000),
//     userAmount: Math.floor(Math.random()* 100)
//   }
//   setAllUsers([...allUsers, user])
// }

//hämtar all data från jsonData
let data = jsonData

//displayar alla userAmount
const singleUserTotal = data.map((user) => <p key={user.userID}>{user.userAmount}kr</p>);

// räknar ut totalt med användare
let counter = Object.keys(data).length;
// console.log(counter)

//räknar ut all "userAmount" som ligger i jsonData
const allUserTotal = data.map((obj) => obj.userAmount);
function sum(user: any) {
  let sum = 0;
  for (let data in user) {
      if (user.hasOwnProperty(data)) {
          sum += parseFloat(user[data]);
      }
  }
  return sum;
}

let summed = sum(allUserTotal);
// console.log(summed)
  return (
    
    <div className="App"> 
      {/* <button onClick={createUser}>click</button> */}      
      <h1>Vite + React</h1>
      <div className='info'>{summed} SEK total av totalt {counter} användare</div>
      <div className='all-total'>{singleUserTotal}</div>
    </div>
  )
}

export default App
