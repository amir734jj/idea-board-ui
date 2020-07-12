import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { login as loginAction } from '../../actions';
import { AlertDismissible } from '../common/AlertDismissible';

const LoginForm = ({ login }) => {
  const { register: formRegister, handleSubmit, errors } = useForm();

  return (
    <Form onSubmit={handleSubmit(login)} className="pure-form pure-form-aligned">
      <FormGroup>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          className="form-control"
          id="username"
          isInvalid={errors.username}
          ref={formRegister({ required: true })}
        />
        {errors.username && <Form.Control.Feedback type="invalid">>This field is required</Form.Control.Feedback>}
      </FormGroup>
      <FormGroup>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          className="form-control"
          id="password"
          isInvalid={errors.password}
          ref={formRegister({ required: true })}
        />
        {errors.password && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
      </FormGroup>
      <Button type="primary">Submit</Button>
    </Form>
  );
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleLogin = async () => {
    await this.props.login();
    this.setState({ redirect: !this.props.error });
  }

  render() {
    const { redirect } = this.state;
    const { error } = this.props;

    return (
      <>
        { error ? <AlertDismissible header="Login Failed" message={error.join('\n')} /> : null }
        <LoginForm login={this.handleLogin} />
        { redirect ? <Redirect push to="/" /> : null }
      </>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
