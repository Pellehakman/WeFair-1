import { nanoid } from 'nanoid';
import { useState } from 'react';
import payersData from '../../data/payers.json'
import Calc from '../Calc/Calc';

const GetPayers = () => {
    let allPayers = payersData

    const [newPayer, setNewPayer] = useState<any>([])
    // console.log(JSON.stringify(newPayer))
        const createPayer = () => {
            let payer = {
                payerID: nanoid(),
                payerAmount: Math.floor(Math.random()* 1 * 100),
                working: false,
                workingFor: ""
            }
      setNewPayer([...newPayer, payer])
    }

        
    const allPayerTotal = allPayers.map((obj) => obj.payerAmount);
        function sum(user: any) {
            let sum = 0;
            for (let data in user) {
            if (user.hasOwnProperty(data)) {
            sum += parseFloat(user[data]);
            }
        } return sum;
    }
            let summed = sum(allPayerTotal);
            // console.log(summed)

    
    
    




    return (
        <div>
            this is payers
            
            <button onClick={createPayer}>Create Payer</button>  
            
        </div>
    );
};

export default GetPayers;