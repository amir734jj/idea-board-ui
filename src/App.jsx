import React from 'react';
import './App.css';
import {connect} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './components/account/Register';
import Login from './components/account/Login';
import {Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">idea-board-ui</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Board</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <LinkContainer to="/Register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/">
              Hello world!
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    email: store.user.email
  };
}


const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({type: 'INCREMENT'}),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
