function parent() {
    function
    return (
        <BasicProps title="My Title" onClick={handleClick}/>
    )
}



function BasicProps(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.onClick}>Click me</button>
        </div>
    )

}

function ChildrenProps(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function Destructuring(props) {
    const {prop1, prop2} = props
    
    return <div>
        <h2>{prop1}</h2>
        <h3>{prop2}</h3>

    </div>
}

function InlineDestructuring ({
    prop1,
    prop2
}) {
    return <div></div>

}

const ArrowNotation = () => {
    return (
        <div></div>
    )
}

class ClassComponent extends React.Component {

    state = 0

    updateState() {
        this.state +1
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

function ConRendParent() {
    retur (
        <>
        <ConditionalRendering hidden={true} />
        {/* this is a shorthand for bolean props */}
        <ConditionalRendering hidden />
        </>
    )
}

function ConditionalRendering(props) {
    const {
        hidden = false,
        otherCondition,
    } = props

    let element;
    if(something) {
        element =(<h2>hi</h2>)
    }

    if(alternativeReturn)

    const someCondition = false
    return (
        <div>
            { hidden &&
            <h1>Conditionally renderd</h1>
            }

            {
                otherCondition
            ? <h1>conditionally renderds</h1>
            : <h2>if conditon is false</h2>
            }
            {element
            }
            {
                !data 
                ?<loadingSpinner />
                :!data.error

                ?;
            }
        </div>
    )
    )
}