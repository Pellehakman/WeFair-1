import React, { useEffect, useState } from 'react';
import GetPayers from '../GetPayers/GetPayers';
import GetUsers from '../GetUsers/GetUsers';
import usersData from '../../data/users.json'
import payersData from '../../data/payers.json'
import jsonData from '../../data/data.json'
import { User } from '../../models/data';

const Calc = () => {
const [newDebt, setNewDebt] = useState<Number>()
const [newPay, setNewPay] = useState<Number>()

let debt = newDebt
let month = 12
let adminFee = 39
let startFee = 129

let userOne = {
    kr: newPay,
    name: 'Pelle'
}

let userFee = Math.floor(Math.round(debt / month + adminFee))
let totalFee = month * adminFee + startFee
let totalEnd = debt + totalFee
let needMoney = debt - userOne.kr

let procentOf = Math.floor(Math.round(userOne.kr / debt * 100))


let winAmount = Math.floor(Math.floor(adminFee * month * procentOf))


    return (
        <div>
            <div></div>
            <span>{userOne.name} köper en produkt för <input onChange={(e => setNewDebt(Number(e.target.value)))}/> kr</span> <br/>
            <span>{userOne.name} har en startavgift på {startFee}kr och varje månad en adminavgift på {adminFee}kr varje gång</span><br/>
            <span>{userOne.name} betalar {userFee} kr/mån i {month} månader inkl. adminavgift</span> <br />
            <span>{userOne.name} betalar i slutändan, {totalEnd}kr totalt</span> <br/>
            <br />
            <span>Du hjälper till med <input onChange={(e => setNewPay(Number(e.target.value)))}/>kr, Men, det behövs resterande {needMoney}kr kvar för betala {userOne.name} skuld</span><br/>
            <span>vinstern för dig är {winAmount / 100}kr</span><br/>   
            <span>Du betalar {procentOf} % av skulden</span> 
        </div> 
    );
};

export default Calc;