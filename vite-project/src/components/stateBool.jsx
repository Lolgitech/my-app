import { useState } from "react"

function StateBool() {
    const [hidden, setHidden] = useState(false)


    return (
        <>
        {
            !hidden &&
            <h1 style={{position: "absolute", top: "-10rem"}}>some text</h1>
         }
         <button onClick={() => setHidden(true)}>Show</button>
         <button onClick={() => setHidden(false)}>Hide</button>
        </>
    )
}



export default StateBool