import {useState} from 'react'
import {Paragraph} from './Paragraph'
// import {Button} from './Button'


const Display = () => {
    //  let counter = 1
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
       
    }

    return (
    <div>
        <Paragraph cd = {counter} name="Nick" phone = "0406881676"/>
        <button onClick = {increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>)



}

export default Display