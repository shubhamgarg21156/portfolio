import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [theme,setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="App font-Rubik scroll-smooth dark:bg-black">
       <Sidebar handleThemeSwitch={handleThemeSwitch}/>
      <main className='dark:bg-black'>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
