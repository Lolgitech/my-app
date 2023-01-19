import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Gallery from "./assets/gallery";
import counterone from "./assets/counter";
import Header from "./components/Header";
// CSS
import "./styles/app.css";
import "/styles/Global.css";
import "/styles/overides.css";
import StyledComponent from "./components/styledComponent/styledcomponent";
import projects from "./data/projects";

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
