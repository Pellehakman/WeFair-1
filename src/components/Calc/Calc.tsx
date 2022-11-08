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
    const [newDebt, setNewDebt] = useState<number[]>()

    let userData = usersData

    let payerData = payersData
    console.log(newDebt)

const newCalc = ({userDebt}:Props) => {
    let payerListlength = payerData.length
    console.log(payerListlength)
    if (payerData)
  
  }
// const found = payerData.find(element => element.payerAmount > 10);
// console.log(found)

}

    




    
  

    return (
        <div>
            <header>This is calc page</header>
<button onClick={newCalc}></button>
            <div>{userData.map((f) => (<p key={f.userID}>UserID: {f.userID} har en debt på {f.userDebt}kr</p>))}</div>
            <div>{payerData.map((f) => (<p key={f.payerID}>PayerID: {f.payerID} har en tillgång på {f.payerAmount}kr</p>))}</div>
            
                
            
        </div>
    );
};

export default Calc;