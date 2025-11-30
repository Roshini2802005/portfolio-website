import React from "react";

/**
 * Plain-React portfolio (no Tailwind, no extra libs).
 * Replace the previous Portfolio.jsx contents with this file.
 */

const projects = [
  {
    title: "Mini E-commerce",
    desc: "Full-stack mini e-commerce site with product listing, cart, auth, and payments mock.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Roshini2802005/mini_ecommerce.git",
  },
  {
    title: "BookSky",
    desc: " Cloud-Native Listing Application.Interactive listing platform built with JavaScript, optimized for responsiveness with smooth navigation and dynamic UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Roshini2802005/Booksky",
  },
  {
    title: "Smart Factory & Process Automation (IoT Project) ",
    desc: "Real-time sensor data ingestion, processing, and visual dashboard for IoT project.  Special Prize Winner – TNWISE Hackathon 2025. The project is patent-protected for its unique design ",
    tech: ["Python", "Flask", "WebSockets"],

  }
];

const skills = [
  "Python", "Java", "C", "HTML & CSS", "JavaScript", "React.js", "Node.js", "Express.js",
  "MongoDB", "SQL", "MySQL", "Git", "GitHub", "Postman", "API Integration",
  "Responsive Web Development"
];

export default function Portfolio() {
  const resumeLink = "Roshini s pdf.pdf"; // replace with your resume URL (PDF)
  const email = "roshiniswaminathan2@gmail.com"; // replace with your email

  return (
    <div className="page">
      <header className="header">
        <div className="brand">Roshini Swaminathan</div>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="btn-resume" href={resumeLink} download>Resume</a>
        </nav>
      </header>

      <main className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero-left">
            <h1>Hi, I'm <span className="accent">Roshini</span> — Software Developer</h1>
            <p className="lead">I build clean, scalable web applications and delightful user experiences. I love turning ideas into reality using modern web technologies and reliable engineering practices.</p>

            <div className="hero-cta">
             <a className="primary" href="#projects">See my work</a>
  <a className="outline" href="#contact">Contact me</a>
            </div>

            <div className="links">
             <a className="muted" href="https://github.com/Roshini2802005" target="_blank">
    github.com/Roshini2802005
  </a>
  <span className="dot">•</span>
  <a className="muted" href="https://www.linkedin.com/in/roshini-swaminathan/" target="_blank">
    linkedin.com/in/Roshini swaminathan
  </a>
            </div>
          </div>

          
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Project Experience</h2>
          <p className="muted">Projects that show problem solving, product thinking, and technical depth.</p>

          <div className="grid projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div className="card-left">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                  <div className="tags">
                    {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="card-right">
                  <a href={p.github} target="_blank" rel="noreferrer" className="link">Code</a>
            
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About & Skills */}
        <section id="about" className="section about-grid">
          <div className="about-card">
            <h2>About me</h2>
            <p className="muted">I'm a passionate developer focused on building efficient, user-friendly applications for the web. I enjoy learning new technologies, improving my code quality, and developing projects that are simple, scalable, and practical. My goal is to grow as a developer who writes clean, maintainable code and ships meaningful products.</p>

            <h3>Experience highlights</h3>
            <ul>
              <li>Built an end-to-end mini e-commerce with authentication, product management and cart functionality.</li>
              <li>Worked on UI improvements, responsiveness, and code quality enhancement in web projects.</li>
              <li>Collaborated with peers on development, debugging, and version control using Git & GitHub.</li>
              <li>Participated in many hackathons and coding competitions, gaining hands-on experience solving real challenges.</li>
            </ul>
          </div>

          <aside className="skills-card" id="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map(s => <div key={s} className="skill">{s}</div>)}
            </div>

            <h4 className="muted">Tools & workflow</h4>
            <p className="muted small">Git, VSCode, Postman, Docker (basic), CI basics.</p>
          </aside>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-card">
          <h2>Get in touch</h2>
          <p className="muted">I'm open to internships and junior roles. Send a quick message and I typically reply within a few days.</p>

          <div className="contact-grid">
            <div>
              <h4>Email</h4>
              <a className="mailto" href={`mailto:${email}`}>{email}</a>



              <h4>Social</h4>
              <div className="social-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            <form 
  className="contact-form"
  action="https://formspree.io/f/xwpqoeao"
  method="POST"
>
  <label>Name <input name="name" required /></label>
  <label>Email <input name="email" type="email" required /></label>
  <label>Message <textarea name="message" rows="4" required/></label>
  
  <div className="form-actions">
    <button type="submit" className="primary">Send message</button>
  </div>
</form>

          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Roshini Swaminathan — Built with care.</footer>
      </main>
    </div>
  );
}
