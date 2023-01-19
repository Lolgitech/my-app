import { createContext, useContext } from "react";

const Mycontext = createContext(null)

function HookState() {
    return (

        <Mycontext.Provider value={"dark"}>

         <Consumer />

        </Mycontext.Provider>
    )
}
function Consumer() {
    const context = userContext(Mycontext)

    return (
        <div className=(Mycontext)
    )
}