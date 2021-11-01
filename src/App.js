import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import NavBar from './components/layouts/NavBar';
import Pokemon from './components/pokemon/Pokemon';
import SearchBar from './components/search/SearchBar';
import backgroundImage from './pattern.png';
function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})`}}>
        <NavBar/>
        <Switch>
        <div className="container">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
