import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Register, Login, Logout } from './components/account';
import About from './components/about';
import Board from './components/board';

class App extends React.Component {
  render() {
    const { name, loggedIn } = this.props;

    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">{name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/home">
                <Nav.Link>Board</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              { !loggedIn ? (
                <>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-4">
          <Container>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/">
                <Board />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ global, account }) => ({
  name: global.name,
  loggedIn: account.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
