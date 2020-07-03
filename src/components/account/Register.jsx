import React from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../actions';
import { connect } from 'react-redux';

const Form = (props) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(props.login)}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" className="form-control" id="name" ref={register({ required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input name="name" type="email" className="form-control" id="email" ref={register({ required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input name="username" type="text" className="form-control" id="username" ref={register({ required: true })} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" className="form-control" id="password" ref={register({ required: true })} />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
}

class Register extends React.Component {

  render() {
    return <Form login={(data, event) => this.props.register(data)} />
  }

}

const mapDispatchToProps = dispatch => {
  return {
    register: async userInfo => await dispatch(register(userInfo)),
  }
}

export default connect(null, mapDispatchToProps)(Register);
