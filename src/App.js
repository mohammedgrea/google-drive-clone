
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard />
    }
  ])
  return (
    <div className="app">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
