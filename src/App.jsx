import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Connect from './Pages/Connect';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
