import './App.css';
import Landingpage from './components/Landingpage';
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Routes>
            <Route
              exact
              path="/"
              element={
                <Landingpage/>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <About/>
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <Contact/>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <Register/>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Login/>
              }
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
