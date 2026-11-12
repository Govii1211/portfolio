import { profile } from "../data";

const pages = ["Home", "About", "Resume", "Portfolio", "Contact"];

function Sidebar({ activePage, onNavigate, menuOpen, onToggleMenu }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img className="avatar" src={profile.avatar} alt={profile.name} />
        <div>
          <h2 className="sidebar-name">{profile.name}</h2>
          <p className="sidebar-title">{profile.title}</p>
        </div>
        <button className="menu-btn" onClick={onToggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        {pages.map((page) => (
          <button
            key={page}
            className={page === activePage ? "nav-link active" : "nav-link"}
            onClick={() => onNavigate(page)}
          >
            {page}
          </button>
        ))}
      </nav>

      <div className="socials">
        {profile.socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" title={s.name}>
            {s.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
