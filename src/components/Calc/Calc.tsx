import React, { useState } from 'react';
import GetPayers from '../GetPayers/GetPayers';
import GetUsers from '../GetUsers/GetUsers';

import jsonData from '../../data/data.json'
import { User } from '../../models/data';

const Calc = () => {
    const [allUsers, setAllUsers] = useState<User[]>([])
    console.log(...allUsers)

    return (
        <div>
            <header>This is calc page</header>
                <GetPayers/>
                <GetUsers setAllUsers={setAllUsers}/> 
        </div>
    );
};

export default Calc;