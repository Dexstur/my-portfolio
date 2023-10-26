import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/Home/Home";
import Credential from "./screens/Credential/Credential";
import Project from "./screens/Projects/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credentials" element={<Credential />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
