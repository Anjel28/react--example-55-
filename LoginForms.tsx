import {useInput} from './useInput';
import React from 'react';

const LoginForms:React.FC = () => {
    const username = useInput<string>(' ');
    const age = useInput<number>(0);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username: ', username.value);
        console.log('Age: ', age.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                   <input type="text" {...username}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number"
                value={age.value}
                onChange={(e) => age.setValue(Number(e.target.value))}/>
            </div>
            <button type="submit">Login</button>

        </form>
    )
}

export default LoginForms;

