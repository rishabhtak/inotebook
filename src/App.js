import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import {
  createBrowserRouter,
} from "react-router-dom";


const App = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        element: <NoteState />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      }
    ],
  },
]);


export default App;
