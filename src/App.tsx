import { useState } from "react";
import { CalendarClock } from "lucide-react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const title = "Adventure Timer";

  return (
    <div className="App">
      <header className="bg-gray-200 flex gap-3 align-baseline text-left py-4 px-4">
        <CalendarClock color="#303030" size={38} />
        <h1 className="text-4xl font-medium text-gray-800">{title}</h1>
      </header>
      <main>Hi there.</main>
      <footer className="bg-gray-900">
        Built and maintained by <a href="https://www.samitani.net">Sam Itani</a>
        <div>
          <a href="https://github.com/itanio/adventure-timer">
            Star this project on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
