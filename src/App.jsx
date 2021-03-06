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
import store from 'store';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { Register, Login, Logout } from './components/account';
import About from './components/about';
import Board from './components/board';
import { accountInfo, refreshToken } from './actions';
import Profile from './components/profile';
import Manage from './components/manage';
import { AddProject, ViewProject } from './components/project';
import { AuthenticatedRoute, UnAuthenticatedRoute } from './components/common';

class App extends React.Component {
  async componentDidMount() {
    await this.props.refreshAccount();
  }

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
                <>
                  <LinkContainer to="/manage">
                    <Nav.Link>Manage</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/logout">
                    <Nav.Link>Logout</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-4">
          <Container>
            <Switch>
              <Route path="/login" render={(p) => <UnAuthenticatedRoute component={Login} {...p} />} />
              <Route path="/register" render={(p) => <AuthenticatedRoute component={Register} {...p} />} />
              <Route path="/about" component={About} />
              <Route path="/logout" render={(p) => <AuthenticatedRoute component={Logout} {...p} />} />
              <Route path="/profile" render={(p) => <AuthenticatedRoute component={Profile} {...p} />} />
              <Route path="/manage" render={(p) => <AuthenticatedRoute component={Manage} {...p} />} />
              <Route path="/project/new" render={(p) => <AuthenticatedRoute component={AddProject} {...p} />} />
              <Route path="/project/:id" render={(p) => <AuthenticatedRoute component={ViewProject} {...p} />} />
              <Route path="/" component={Board} />
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
  refreshAccount: async () => {
    const token = store.get('token');

    if (token) {
      const { exp } = jwtDecode(token);
      const now = new Date(0);
      now.setUTCSeconds(exp);
      const untilTokenExpires = moment.duration(moment(now).diff(moment()));

      if (untilTokenExpires.asMinutes() > 5) {
        await dispatch(accountInfo());

        setTimeout(async () => {
          const { token: updatedToken } = dispatch(refreshToken());
          store.set('token', updatedToken);
        }, untilTokenExpires.subtract(1, 'minutes'));
      }
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
