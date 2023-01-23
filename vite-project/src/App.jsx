import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Gallery from "./assets/gallery";
import counterone from "./assets/counter";
import Header from "./components/Header";
import projects from "./data/projects";
// CSS
import "./styles/app.css";
import "/styles/Global.css";
import "/styles/overides.css";
import StyledComponent from "./components/styledComponent/styledcomponent";
// Components 

import StateBool from "./components/stateBool";
import StateCollapseMenu from "./components/stateCollapseMenu";
import StateCounter from "./components/StateCounter";

import data from './data'
import { useEffect } from "react";
import Getpokemons from './components/GetPokemons'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import LandingPage from "../my-app/src/Assets/LandingPage";
import AboutPage from "../my-app/src/Assets/aboutPage";

function App() {
  retrun (
    <Router>
      <nav>
        <ul>
          <a href="/">Home</a>
          <link to="/">home</link>
          <link to="/about">About</link>
        </ul>
      </nav>
      <Routes>
        <Route path='/'>
        <Route path='' element={<LandingPage />} />
        <Route path='about' element={<AboutPage />} />
      </Route>
      <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>

    </Router>
  )
}

export default App





// function App() {
//   const [show, setShow] = useState(true)

//   function toggleShow() {
//     setShow(
//       (oldState) => !oldState
//     )
//   }

//   return (
//     <div className="App">
//     <button onClick={toggleShow}>Show</button>
//     {
//       show && (
//         <>
//       <Getpokemons url="https://pokeapi.com/api/v2/pokemon" />
//       </>
//   )
//     }
//     </div>
//   )

// function Getpokemons() {
//   const [pokemonList, setPokemonList] = useState(null)
//   const [error, setError] = useState(false)

//   useEffect(
//     () => {
//       fetch("https://pokeapi.co/api/v2/pokemon")
//       .then(response => response.json())
//       .then(data => {
        
//         setPokemonList(data)
//       })
//       .catch(
//         (error) => {
//           setError(error)
//         }
//       )
//     },
//     [conditionA, conditionB]
//     )
//     oldCondA === newCondA
//     // quit early if error
//   if (error) return <h1>Error</h1>

//   return (
//     <>
//     <h1> Pokemon</h1>
//     {
     
//       pokemonList.results.map(
//         (pokemon, index) => {
//           return (
//             <div key={index}>
//               <h3>{pokemon.name}</h3>
//               <h4>{pokemon.url}</h4>
//             </div>
//           )
//         }
//       )
//   ) : (
//     <h1>Loading...</h1>
//   )
//   }
    
//     </>
//   )
// }





function App() {
  const [count, setCount] = useState(0) 

  function increment() {
    setCount(
      (oldCount) => {return oldCount +1}
      (oldCount) => oldCount +1
    )
  }

  console.log("this will run on every render");

  useEffect(
    () => {
      console.log("component mounted")
    },
    []
  )

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      </div>
  )
}
      
      
      data.map(
          (element) => {
            return (
            //   <Card title={element.title} imageSource={element.imageSource} />
            // )
            <Card key={index} {...element} />
           }
          )
          
          }   
        
    </div>
  )

function Card(props) {
  const { title, imageSource } = props

  return ()


// function App() {
//   return (
//     <div className="App" style={{position: "relative"}}>
//       <StateCollapseMenu></StateCollapseMenu>
//     </div>
//   ) 
// }
//export default App 



// funtion App() {

//   const [hidden, setHidden] = useState(false)
//   const [countB, setCountB] = useState(0)

  

//   return (
//     <div className="App" style={{position: "relative"}}>
//       {
//         !hidden
//         ? <h1 style={{position: "absoulute", top: "-10rem"}}> state is true</h1>
//         : <h1 style={{position: "absoulute", top: "-10rem"}}> state is false</h1>
//       }

{/* <h1>{countA}</h1>
<button onClick={() => setHidden(true)}>show</button>
<button onClick={() => setHidden(false)}>hide</button> */}
    
<h1>{countB}</h1>    
<button onClick={() => setCountB((oldCount) => oldCount +1)}>increment</button>
<button onClick={() => setCountB(countB -1)}>decrement</button>
    </div>
  )
}


      {/* <h1>{countA}</h1>
<button onClick={() => someVar +1}>Increment</button> */}

{/* <h1>{countA}</h1>
<button onClick={() => setCountA(10)}>set to 10</button>
<button onClick={() => setCountA(20)}>set to 20</button>
    
<h1>{countB}</h1>    
<button onClick={() => setCountB(countB +1)}>increment</button>
<button onClick={() => setCountB(countB -1)}>decrement</button>
    </div>
  )
} */}



// function App() {
//   return (
//     <div className="App">
//       <h1>{projects}</h1>
//       </div>
//   )
// }

// export default App

function App() {
  return(
    <div className="App">
      <ProjectCard
      name={projects.name}/>
      </div>
  )
}

function ProjectCard(props) {
  const {name, ShortDescription, Techstack} = props

  return (
    <div>
      {/* <h1>{projects.name}</h1>
      <p>{projects.shortDescription}</p> */}

      <h1>{name}</h1>
      <p>{ShortDescription}</p>
      {/* <h3>{TechStack[0]}</h3>
      <h3>{TechStack[1]}</h3>
      <h3>{TechStack[2]}</h3>
      <h3>{TechStack[3]}</h3> */}
      </div>

      {
       Techstack.map((Element, index) => {
        return (
        //   <div key={index}>
        //  <h3>{element}</h3>
          {/* <h3 key={index}>{element}</h3> */}
        <TechBadge key=/>
        )
       }
       )
      }
      </div>

      function TechBadge(name) {
        return (
          <div>
            <h3>{element}</h3>
            </div>
        )

        
      }

      function TechBadge(props) {
        return ()

      }
        
        
   
       



//export default App





function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header
       Title="This is the title"
       subTitle="this is another prop"
       />

      <Main>
        <p>some text here</p>
        <p>some text here</p>
       <StyledComponent />
      </Main>
      <footer className='footer'>
        <h1> Footer </h1>

        </footer>
        </div>
  )
}



        
        




      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React lol</h1> */}

      <Gallery />
      {/* <------ imported */}


//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </header>
  )
}


function Main(props) {
  return (
    <main className="main">
      <h1>Main</h1>
      {props.children}
    </main>
  )
}

function App() {
  return (
    <>
      <Header />

      <Main />

      <footer className="MyClass">
        <h1>
          {" "}
          Make changes <Faber />
        </h1>
      </footer>
    </>
  );
}
//Custom component
function Main() {
  const Title = "This is a title";
  retrun(
    <main>
      <h1> Title </h1>
    </main>
  );
}
//Arrow function notation
const ArrowComponent = () => {
  return <main>Main</main>;
};

export default App;


// destructuring an array

const arr = [1, 3]

const firstElement = arr[0]
const secondElement = arr[1]

const [first, second] = arr

// destructuring objects

const obj = {A: 1, B: 32}

const a = obj.A
const b = obj.B

const {A, B} = obj

