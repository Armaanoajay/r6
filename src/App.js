import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
        <h1>Armaano Ajay</h1>
        <p>Machine Learning Expert</p>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        <a href="https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9">
          Resume
        </a>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" /> <br />
          <input type="email" placeholder="Your Email" />
          <br />
          <textarea placeholder="Your Message"></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
