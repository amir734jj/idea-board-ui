import React from 'react';
import {login} from '../../actions';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {Button, Form, FormGroup} from "react-bootstrap";

const LoginForm = (props) => {
  const {register, handleSubmit, errors} = useForm();

  return (
    <Form onSubmit={handleSubmit(props.login)} className='pure-form pure-form-aligned'>
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
  );
}

class Login extends React.Component {

  render() {
    return (
      <div className='mt-3'>
        <LoginForm login={(data, event) => this.props.login(data)}/>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    login: async user => await dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);
