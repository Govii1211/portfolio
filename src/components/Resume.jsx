import SectionTitle from "./SectionTitle";
import { education, experience, skills } from "../data";

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.title + item.period}>
          <span className="period">{item.period}</span>
          <h4>{item.title}</h4>
          <p className="place">{item.place}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function Resume() {
  return (
    <section className="page">
      <SectionTitle title="Resume" subtitle="Meri journey" />

      <div className="grid-3">
        <div>
          <h3 className="block-title">Education</h3>
          <Timeline items={education} />
        </div>
        <div>
          <h3 className="block-title">Experience</h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="block-title">Skills</h3>
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-head">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
