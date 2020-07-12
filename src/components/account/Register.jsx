import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { register as registerAction } from '../../actions';
import { AlertDismissible } from '../common/AlertDismissible';

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
        <Button type="primary">Submit</Button>
      </Form>
    </div>
  );
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleRegister = async (...args) => {
    await this.props.register(...args);
    this.setState({ redirect: !this.props.error });
  }

  render() {
    const { redirect } = this.state;
    const { error } = this.props;

    return (
      <>
        { error ? <AlertDismissible header="Register Failed" message={error.join('\n')} /> : null }
        <RegisterForm register={this.handleRegister} />
        { redirect ? <Redirect push to="/login" /> : null }
      </>
    );
  }
}

const mapStateToProps = ({ account }) => ({
  error: account.error,
});

const mapDispatchToProps = (dispatch) => ({
  register: (userInfo) => dispatch(registerAction(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
