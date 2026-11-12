import SectionTitle from "./SectionTitle";
import { profile, services, funFacts } from "../data";

function About() {
  return (
    <section className="page">
      <SectionTitle title="About Me" subtitle={profile.tagline} />

      <div className="block">
        <h3>I am {profile.title}</h3>
        {profile.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="block">
        <h3 className="block-title">What I Do</h3>
        <div className="grid-4">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="block">
        <h3 className="block-title">Fun Facts</h3>
        <div className="grid-4">
          {funFacts.map((f) => (
            <div className="fact" key={f.label}>
              <div className="fact-value">{f.value}</div>
              <p>{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
