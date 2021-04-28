

import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navigation from './components/Navigation'
import registrarUser from './components/registrarUser'
import login from './components/login';
import paginaPrincipal from './components/paginaPrincipal';
import paginaParaGraficos from './components/paginaParaGraficos';


function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Route path="/" exact component={login}></Route>
      <Route path="/registro" exact component={registrarUser}></Route>
      <Route path="/paginaPrincipal" exact component={paginaPrincipal}></Route>
      <Route path="/graficos" exact component={paginaParaGraficos}></Route>
      </div>
    </Router>
  );
}

export default App;
