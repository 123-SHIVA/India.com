import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="bg-white">
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
