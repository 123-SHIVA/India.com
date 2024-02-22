import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


import AboutPage from './Pages/AboutPage';
import Business from './Pages/Business';

function App() {
  return (
    <div className="bg-white">
      
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/business' element={<Business/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
