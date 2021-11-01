import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/layouts/Dashboard';
import NavBar from './components/layouts/NavBar';
import Pokemon from './components/pokemon/Pokemon';
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
