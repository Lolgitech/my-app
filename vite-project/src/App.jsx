import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/app.css";
import Gallery from "./assets/gallery";
import counterone from "./assets/counter";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React lol</h1>
      <Gallery /> 
      {/* <------ imported */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

function App() {
  return (
  <>
    <Header />
    
    <Main />
    
    <footer >

    <h1> Footer</h1>
    </footer>
    </>
  )
}
//Custom component
function Main() {
  retrun (
    <main>
      <h1> Main </h1>
    </main>
  )
}
//Arrow function notation
const ArrowComponent = () => {
  return (
    <main>Main</main>
  )
}

export default App;
