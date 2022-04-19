import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Facility from './pages/Fasility'
import Contacts from './pages/Contacts'
import NavbarComponent from './components/NavbarComponent';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/fasility" component={Facility}/>
          <Route path="/contacts" component={Contacts}/>
      </Router>
    </div>
  );
}

export default App;
