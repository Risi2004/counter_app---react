import { useState } from "react";

function randomNumber()
{

    var [count, setCount] = useState(0)
    
    function callRandomNumber()
    {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        setCount(randomNumber)
    }


    return(
        <div>
            <h1>Random Number Generator (1-10)</h1>
            <h1>0</h1>
            <button>Random Number</button>
        </div>
    )
}


export default randomNumber