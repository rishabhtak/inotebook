import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import {
  createBrowserRouter,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';



const App = createBrowserRouter([
  {
    element: <NoteState />,
    children: [
      {
        element: <Navbar />,
        children: [
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/signup",
            element: <Signup />
          },
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
