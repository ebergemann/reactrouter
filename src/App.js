import React, { Component } from 'react';
import './App.css';
import './ui-tool/css/nm-cx/main.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="row">
            <div className="small-3 small-centered columns">
            <ul class="tabs">
              <ActiveMenuLink exact={true} to="/" label="Home" />
              <ActiveMenuLink to="/users" label="Users" />
              <ActiveMenuLink to="/todos" label="Todos" />
            </ul>
            </div>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/todos" component={Todos} />
        </div>
      </BrowserRouter>
    );
  }
}
const ActiveMenuLink = ({ label, to, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <li class={`tab-title${match ? ' active' : ''}`}><button><Link to={to}>{label}</Link></button></li>
  )} />
)

const Home = props => {
  return (
    <div className="homeDiv">
      <h1>Users and Todos</h1>
    </div>
  )
}

const Users = props => {
  return (
    <div className="todos">
      <div className="listContainer">
        <ul>
          <li><Link to="/users/1">User 1</Link></li>
          <li><Link to="/users/2">User 2</Link></li>
          <li><Link to="/users/3">User 3</Link></li>
          <li><Link to="/users/4">User 4</Link></li>
        </ul>
      </div>
      <div className="itemContainer">
        <Route path="/users/:id" component={UserItem} />
      </div>
    </div>
  )
}

const Todos = props => {
  return (
    <div className="todos">
      <div className="listContainer">
        <ul>
          <li><Link to="/todos/1">Todo 1</Link></li>
          <li><Link to="/todos/2">Todo 2</Link></li>
          <li><Link to="/todos/3">Todo 3</Link></li>
          <li><Link to="/todos/4">Todo 4</Link></li>
        </ul>
      </div>
      <div className="itemContainer">
        <Route path="/todos/:id" component={TodoItem} />
      </div>

    </div>
  )
}

const TodoItem = ({ match }) => (
  <div className="card">
    
    <h3>{`Todo Item: ${match.params.id}`}</h3>
    <p>This is some placeholder text that represents the details
       about this particular todo item. Thi swoudl eventually be
       replaced by some real text that comes from an api call using
       redux/thunk.</p>
  </div>
)

const UserItem = props => (
  <div className="card">
    <h3>{`User ID: ${props.match.params.id}`}</h3>
    <p>This is some placeholder text that represents the details
       about this particular user. This would eventually be
       replaced by some real text that comes from an api call using
       redux/thunk.</p>
  </div>
)

export default App;
