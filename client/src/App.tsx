import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';

import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUpPage from './pages/SignUp';

import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <div className='navbar-left-outer'>
            <NavLink className="navbar brand" to="/"><i className="fa-solid fa-robot"></i>akago</NavLink>
          </div>
        </nav>
        <button onClick={() => navigate('/signup')}>sign up</button>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}  />
          <Route path='/signup' element={<SignUpPage />}  />
          <Route path='/dashboard' element={<Dashboard />}  />
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
