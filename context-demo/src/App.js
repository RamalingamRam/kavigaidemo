import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import "./index.css";
import ComB from "./ComB";

const Data = createContext();

export default function App() {
  return (
    <div className="App">
      <Data.Provider value={"Welcome to GFG"}>
        <ComB />
      </Data.Provider>
    </div>
  );
}

export { Data };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
