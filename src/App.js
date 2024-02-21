import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div className="bg-white">
      
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
