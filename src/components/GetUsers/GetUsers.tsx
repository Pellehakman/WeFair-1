import { nanoid } from 'nanoid';
import { useState } from 'react';
import usersData from '../../data/users.json'
import { User } from '../../models/data';

type Props = {   
    setAllUsers: any;   
}

const GetUsers = ({setAllUsers}: Props) => {

    const [newUser, setNewUser] = useState<User[]>([])
    // console.log(JSON.stringify(newUser)) 
        const createUser = () => {
        let user = {
            userID: nanoid(),
            userDebt: Math.floor(Math.random() * 7000) + 5000
        }
        setNewUser([...newUser, user])
    }
        setAllUsers(usersData)

    return (
        <div>this is create user
            <button onClick={createUser}>CREATE USER</button>
        </div>
    );
};

export default GetUsers;