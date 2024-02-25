import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


import AboutPage from './Pages/AboutPage';
import Business from './Pages/Business';
import Sustainability from './Pages/Sustainability';
import MediaCentre from './Pages/MediaCentre';
import BrandPage from './Pages/BrandPage';
import ITCResources from './Pages/ITCResources';
import Investor from './Pages/Investor';


function App() {
  return (
    <div className="bg-white">
      
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/business' element={<Business/>} />
          <Route path='/Sustainability' element={<Sustainability/>} />
          <Route path='/media-centre' element={<MediaCentre/>} />
          <Route path='/investor' element={<Investor/>} />
          
          <Route path='/ITC-Resources' element={<ITCResources/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
