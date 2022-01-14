import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { styledComponentsTheme } from "./styledComponents/styledComponentsTheme";
import {ThemeContext} from "./context/ThemeContext"


function App() {
  const {themeName} = useContext(ThemeContext);
  return (
    <ThemeProvider theme={styledComponentsTheme[themeName]}>
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
