import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <h1 className="p-headind">Portfolio</h1>

      <div className="p-container">
        <div className="p-box">
          <div className="overlay-text">
            <h1>Codes</h1>
          </div>

          <img src="/website.png" alt="website" />
        </div>

        <div className="p-box">
          <div className="overlay-text">
            <a href="https://rajshree-makeover.netlify.app/">
              <h1>Project</h1>
            </a>
          </div>

          <img src="/website photo.png" alt="website" />
        </div>

        <div className="p-box">
          <div className="overlay-text">
            <a href="https://www.instagram.com/i_am_rishabhraj/">
              <h1>Creative Post</h1>
            </a>
          </div>

          <img src="/Creative  post.png" alt="website" />
        </div>

        <div className="p-box">
          <div className="overlay-text">
            <h1>Data Structure</h1>
          </div>

          <img src="/cpro.png" alt="website" />
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
