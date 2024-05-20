//// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.


import React, { useMemo, useState } from "react";
// find factorial of a number
// factorial 
// step 1: define the state first

export function Assignment2() {
    const [input, setInput] = useState(0);
    // facotrial logic below
    const expensiveValue = useMemo(() => {
        let value = 1;
        for (let i = 1; i <= input; i++) {
            value = value * i;
        }
        return value;
    }, [input]);

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value is {expensiveValue}</p>
        </div>
    )
}