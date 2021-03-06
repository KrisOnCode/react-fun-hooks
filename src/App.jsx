import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import User from './pages/User'
import Users from './pages/Users'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/user' component={User} />
          <Route path='/products' component={Products} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
