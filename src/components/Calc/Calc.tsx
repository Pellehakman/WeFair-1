import React, { useEffect, useState } from 'react';
import GetPayers from '../GetPayers/GetPayers';
import GetUsers from '../GetUsers/GetUsers';
import usersData from '../../data/users.json'
import payersData from '../../data/payers.json'
import jsonData from '../../data/data.json'
import { User } from '../../models/data';
type Props ={
    userDebt: number
}
const Calc = () => {
   
 

    let userData = usersData

    let payerData = payersData
    // console.log(payerData)

    

const newCalc = () => {
    const [newDebt, setNewDebt] = useState<number[]>()
    console.log(newDebt)
  
   let userDebt = userData.map((f) => f.userDebt)
   setNewDebt(userDebt)

    for(var i in payerData){
        var obj = payerData[i];
        
         if(obj.payerAmount  ){
              return console.log('yes')
        } else{
            console.log('no')
        }
    }
}
    return (
        <div>
            <header>This is calc page</header>
            <button onClick={newCalc}>CALC</button>
            <div>{userData.map((f) => (<p key={f.userID}>UserID: {f.userID} har en debt på {f.userDebt}kr</p>))}</div>
            <div>{payerData.map((f) => (<p key={f.payerID}>PayerID: {f.payerID} har en tillgång på {f.payerAmount}kr</p>))}</div>         
        </div>
    );
};

export default Calc;