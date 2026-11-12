import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

const pages = {
  Home: <Home />,
  About: <About />,
  Resume: <Resume />,
  Portfolio: <Portfolio />,
  Contact: <Contact />,
};

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState("#f5c518");

  function navigate(page) {
    setActivePage(page);
    setMenuOpen(false);
  }

  return (
    <div className="layout" style={{ "--main": color }}>
      <Sidebar
        activePage={activePage}
        onNavigate={navigate}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
      />
      <main className="content" key={activePage}>
        {pages[activePage]}
      </main>
      <ThemeSwitcher color={color} onChange={setColor} />
    </div>
  );
}

export default App;
