import React, { useState } from "react";

interface Props {
    onSubmit: (cred: { email: string; password: string }) => void;
  }
export default function Form ({onSubmit}: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
                default:
                    console.warn(`Неизвестное имя поля - ${name}`)
        }
    }
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        onSubmit({email, password})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
            Почта
                <input type='email' name='email' value={email} onChange={onChange}/>
            </label>
            <label>
            Пароль
                <input type='password' name='password' value={password} onChange={onChange}/>
            </label>
            <button type='submit'>Войти</button>
        </form>
    )
}