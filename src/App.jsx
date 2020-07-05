import React from 'react';
import './App.css';
import {connect} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Register, Login} from './components/account';
import {Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import About from "./components/about";

class App extends React.Component {

  wrapComponent(thing) {
    return (
      <div className='mt-3'>
        {thing}
      </div>
    )
  }

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">idea-board-ui</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
              {this.wrapComponent(<Login/>)}
            </Route>
            <Route path="/register">
              {this.wrapComponent(<Register/>)}
            </Route>
            <Route path="/about">
              {this.wrapComponent(<About/>)}
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
