import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,incrementByAmount } from '../slices/counterslice'



function CounterCount() {

    const count = useSelector((state) => state.counter.value)


    const dispatch =   useDispatch()
    return (
        <div>
            {count}

            <button type='button' onClick={() => dispatch(increment())}>plus</button>
            <button type='button' onClick={() => dispatch(incrementByAmount(3))}>buy amount</button>
        </div>
    )
}

export default CounterCount