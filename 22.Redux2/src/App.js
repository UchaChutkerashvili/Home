import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
