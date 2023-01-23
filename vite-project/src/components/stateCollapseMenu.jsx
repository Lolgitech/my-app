function StateCollapseMenu({children}) {
    //Destructure incoming props
    const {children} = props
    const [hover, setHover] = useState(false)
    return (
        <div
        style={{
            position: "relative"
        }}
        >
            <h1
            onMouseEnter={() => setHover(true)}
            onMouseLeave= {() => setHover(false)}
            >Menu</h1>
        <div    
            style={{
                display: hover ? "flex" : "none"
            }}
            >
            {children}
            </div>
        </div>

    )
}

export default StateCollapseMenu