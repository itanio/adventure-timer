import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const title = "Adventure Timer";

  return (
    <div className="App">
      <header className="bg-slate-800">
        <h1 className="text-4xl font-medium">{title}</h1>
      </header>
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test hot module reload.
          </p>
        </div>
      </main>
      <footer className="bg-slate-900">
        Built and maintained by <a href="https://www.samitani.net">Sam Itani</a>
        <div>
          <a href="">Star this project on GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
