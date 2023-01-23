import { useState } from "react";

function StateCounter() {
    const [countB, setCountB] = useState(10)
    return (
<>
    <h1>{countB}</h1>    
<button onClick={() => setCountB((oldCount) => oldCount +1)}>Increment</button>
<button onClick={() => setCountB(countB -1)}>Decrement</button>
</>
    )
}

export default StateCounter;