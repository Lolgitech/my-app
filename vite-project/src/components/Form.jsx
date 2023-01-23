import { useState } from "react"

function Form() {
    const [input, setInput] = useState("")
    
    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit() {
        console.log("Form submitted")

        setInput("")
    }

    return (
        <>
        
        <input value={input} type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        
        <h2>{input}</h2>
        </>
    )
}


export default Form
