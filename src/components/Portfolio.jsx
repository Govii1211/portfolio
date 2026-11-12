import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="page">
      <SectionTitle title="Portfolio" subtitle="Mere projects" />

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === filter ? "filter active" : "filter"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid-projects">
        {shown.map((p) => (
          <div className="project" key={p.title}>
            <div className="project-thumb">{p.emoji}</div>
            <div className="project-body">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank">
                View Code →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
