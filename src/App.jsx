
import './css/App.css';
import Favorites from './pages/favorites'; // <-- corrected line
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/Moviecontext';
function App() {
  return (
    <MovieProvider>
     <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
