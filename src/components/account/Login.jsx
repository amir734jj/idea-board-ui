import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import store from 'store';
import { login as loginAction } from '../../actions';
import { AlertDismissible } from '../common';

const LoginForm = ({ loginHandler }) => {
  const { register: formRegister, handleSubmit, errors } = useForm();

  return (
    <Form onSubmit={handleSubmit(loginHandler)} className="pure-form pure-form-aligned">
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

class Login extends React.Component {
  loginHandler = async (...args) => {
    const { error, payload } = await this.props.loginHandler(...args);
    if (!error) {
      store.set('token', payload.token);
      this.props.history.push('/');
    }
  }

  render() {
    const { error } = this.props;
    return (
      <>
        { error ? <AlertDismissible header="Login Failed" message={error.join('\n')} variant="danger" /> : null }
        <LoginForm loginHandler={this.loginHandler} />
      </>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
