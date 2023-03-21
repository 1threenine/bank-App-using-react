import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Reg from './Reg';
import Transaction from './Transaction';
import Users from './Users';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="card-header">
            <h2>Bank</h2>
          </div>
          <Link to="/">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/Transaction">His</Link>
          <Link to="/Reg">REg</Link>
          <Link to="/users">Users</Link>
          <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/reg">
              <Reg />
            </Route>
            <Route path="/transaction">
              <Transaction />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
