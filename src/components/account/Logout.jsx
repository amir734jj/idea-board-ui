import React from 'react';
import { connect } from 'react-redux';
import store from 'store';
import { AlertDismissible } from '../common';
import { logout as logoutAction } from '../../actions';

class Logout extends React.Component {
  async componentDidMount() {
    await this.handleLogout();
  }

  handleLogout = async () => {
    const { error } = await this.props.logoutHandler();
    if (!error) {
      store.remove('token');
      this.props.history.push('/');
    }
  }

  render() {
    const { error } = this.props;

    return error ? <AlertDismissible header="Logout Failed" message={error.join('\n')} variant="danger" /> : null;
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
