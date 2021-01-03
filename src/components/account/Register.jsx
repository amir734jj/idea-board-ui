import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { register as registerAction } from '../../actions';
import { AlertDismissible } from '../common';

const RegisterForm = ({ register }) => {
  const { register: formRegister, handleSubmit, errors } = useForm();

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit(register)} className="pure-form pure-form-aligned">
        <FormGroup>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="form-control"
            id="name"
            isInvalid={errors.name}
            ref={formRegister({ required: true })}
          />
          {errors.name && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            className="form-control"
            id="email"
            isInvalid={errors.email}
            ref={formRegister({ required: true })}
          />
          {errors.email && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
        </FormGroup>
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
          {errors.username && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
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
        <FormGroup>
          <Form.Label htmlFor="passwordConfirmation">Password Confirmation</Form.Label>
          <Form.Control
            name="passwordConfirmation"
            type="password"
            className="form-control"
            id="passwordConfirmation"
            isInvalid={errors.passwordConfirmation}
            ref={formRegister({ required: true })}
          />
          {errors.passwordConfirmation && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
        </FormGroup>
        <Button type="primary">Submit</Button>
      </Form>
    </div>
  );
};

class Register extends React.Component {
  registerHandler = async (...args) => {
    const { error } = await this.props.registerHandler(...args);
    if (!error) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { error } = this.props;

    return (
      <>
        { error ? <AlertDismissible header="Register Failed" message={error.join('\n')} variant="danger" /> : null }
        <RegisterForm register={this.registerHandler} />
      </>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  registerHandler: (userInfo) => dispatch(registerAction(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
