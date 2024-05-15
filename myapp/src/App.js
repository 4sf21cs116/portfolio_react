import'./App.css';
import NavBar from './components/NavBars';
import Home from './components/Homes';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';

function  App() {
  return(
    <main>
      {/* <CustomCursor /> */}
      <NavBar/>
      <Home/>
      <Skill/>
      <Project/>
      <Contact/>
      
     
    </main>
  )
}

export  default App;

