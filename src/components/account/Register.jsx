import React from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../actions';
import { connect } from 'react-redux';
import {Button, Form, FormGroup} from "react-bootstrap";

const RegisterForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className='mt-3'>
      <Form onSubmit={handleSubmit(props.register)} className='pure-form pure-form-aligned'>
        <FormGroup>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control name="name" type="text" className="form-control" id="name"
                        isInvalid={errors.name}
                        ref={register({required: true})}/>
          {errors.name && <Form.Control.Feedback type="invalid">>This field is required</Form.Control.Feedback>}
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control name="email" type="email" className="form-control" id="email"
                        isInvalid={errors.email}
                        ref={register({required: true})}/>
          {errors.email && <Form.Control.Feedback type="invalid">>This field is required</Form.Control.Feedback>}
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control name="username" type="text" className="form-control" id="username"
                        isInvalid={errors.username}
                        ref={register({required: true})}/>
          {errors.username && <Form.Control.Feedback type="invalid">>This field is required</Form.Control.Feedback>}
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control name="password" type="password" className="form-control" id="password"
                        isInvalid={errors.password}
                        ref={register({required: true})}/>
          {errors.password && <Form.Control.Feedback type='invalid'>This field is required</Form.Control.Feedback>}
        </FormGroup>
        <Button type='primary'>Submit</Button>
      </Form>
    </div>
  );
}

class Register extends React.Component {

  render() {
    return (
      <RegisterForm login={(data, event) => this.props.register(data)}/>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    register: async userInfo => await dispatch(register(userInfo)),
  }
}

export default connect(null, mapDispatchToProps)(Register);
