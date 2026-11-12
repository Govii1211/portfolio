import { profile } from "../data";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>{profile.name}</h1>
        <p className="home-title">{profile.title}</p>
        <ul className="info-list">
          {profile.info.map((item) => (
            <li key={item.label}>
              <span className="label">{item.label}</span>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
