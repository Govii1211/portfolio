import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = profile.info.find((i) => i.label === "E-mail").value;
    const subject = encodeURIComponent(`Portfolio se message: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="page">
      <SectionTitle title="Contact" subtitle="Baat karte hain!" />

      <div className="grid-2">
        <div>
          <h3 className="block-title">Get in Touch</h3>
          {profile.info.map((item) => (
            <p key={item.label}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="block-title">Send a Message</h3>
          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
