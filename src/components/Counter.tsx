import React, {useState} from "react";
import './counter.css'

interface iProps {
    initialValue?: number;
    step?: number;
}
const Counter = ({initialValue = 0, step = 1}: iProps) => {
    const [value, setValue] = useState(initialValue);


    const decrement = () => setValue(value => value - step);
    const increment = () => setValue(value => value + step)
return (
    <div className='counter'>
        <button className="button" type='button' onClick={decrement}>Уменьшить на {step}</button>
        <span className='value'>{value}</span>
        <button className="button" type='button' onClick={increment}>Увеличить на {step}</button>
    </div>
)
}

export default Counter;