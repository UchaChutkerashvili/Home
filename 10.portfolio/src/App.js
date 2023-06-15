import './App.css';

function App() {
   return (
    <div>
      <header>
        <h1>John Doe</h1>
        <h2>Front-end Developer</h2>
      </header>

      <section>
        <h3>About Me</h3>
        <p>
          I am a passionate front-end developer with experience in HTML, CSS,
          and JavaScript. I love creating user-friendly and visually appealing
          websites that provide a great user experience.
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
              Project 1
            </a>
          </li>
          <li>
            <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
              Project 2
            </a>
          </li>
          <li>
            <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
              Project 3
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <p>Email: john.doe@example.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
    </div>
  );
}

export default App;
