import './App.css';
import Carosal from './Components/Carosal';

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App text-4xl">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
