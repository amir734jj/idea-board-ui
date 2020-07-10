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
import Board from "./components/board";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">{this.props.name}</Navbar.Brand>
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
        <div className='mt-4'>
          <Container>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/">
                <Board/>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({global}) => {
  return {
    name: global.name
  };
}


const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({type: 'INCREMENT'}),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
