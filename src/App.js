import './App.css';
import Landingpage from './components/Landingpage';
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
// import Navbar from './components/Navbar';


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Routes>
            <Route
              exact
              activeClassName="active"
              path="/"
              element={
                <Landingpage/>
              }
            />
            <Route
              exact
              activeClassName="active"
              path="/about"
              element={
                <About/>
              }
            />
            <Route
              exact
              activeClassName="active"
              path="/contact"
              element={
                <Contact/>
              }
            />
            <Route
              exact
              activeClassName="active"
              path="/register"
              element={
                <Register/>
              }
            />
            <Route
              exact
              activeClassName="active"
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
