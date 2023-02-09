import React from "react";

function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h1>About Me</h1>
        <h2>Software Engineer</h2>
        <p>
          I am a 3rd year Computer Science Engineering student from Lovely
          Professional University, Punjab{" "}
        </p>
        <a href="https://www.linkedin.com/in/rishabh-raj-89b529204/">
          <button>View More Details</button>
        </a>
      </div>

      <div className="about-model">
        <img src="/profile-pic.png" alt="model" />
      </div>
    </section>
  );
}
export default About;
