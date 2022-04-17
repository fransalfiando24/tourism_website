import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Facility from './pages/Fasility'
import Contacts from './pages/Contacts'
import NavbarComponent from './components/NavbarComponent';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/fasility" element={<Facility/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
