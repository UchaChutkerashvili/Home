import React from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";
import "./App.css"

 
const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowResize();

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Set the theme to 'light' if the width is less than or equal to 768px (mobile version)
  React.useEffect(() => {
    if (width <= 768) {
      setTheme('light');
    }
  }, [width, setTheme]);

  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <header>
        <h1>Dark/Light Mode Toggle</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
        <p>
          This is an example application to demonstrate dark and light mode using React.
        </p>
      </main>
    </div>
  );
};

export default App;