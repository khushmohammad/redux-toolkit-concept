import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CounterCount from './CounterCount'


function CounterShow() {
    const count = useSelector((state) => state.counter.value)
    // const [count, setcount] = useState(0)
    return (
        <div>
            {count}
            <CounterCount />
        </div>
    )
}

export default CounterShow