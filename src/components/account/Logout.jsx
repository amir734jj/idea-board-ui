import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AlertDismissible } from '../common/AlertDismissible';
import { logout as logoutAction } from '../../actions';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  componentDidMount() {
    this.props.handleLogout().then();
  }

  handleLogout = async () => {
    await this.props.logout();
    this.setState({ redirect: !this.props.error });
  }

  render() {
    const { redirect } = this.state;
    const { error } = this.props;

    return (
      <>
        { error ? <AlertDismissible header="Register Failed" message={error.join('\n')} /> : null }
        { redirect ? <Redirect push to="/" /> : null }
      </>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);