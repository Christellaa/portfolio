import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Studies from "./pages/Studies/Studies";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studies" element={<Studies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      {/*<Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
