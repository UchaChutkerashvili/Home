import './App.css';
import './App.dark.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from './store/theme/theme.slice';







function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };
  console.log(darkMode)
  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme}>{darkMode ? 'dark' : 'light' }</button>
      <RouterProvider router={createBrowserRouter(routes)} />

    </div>
  );
}

export default App;
