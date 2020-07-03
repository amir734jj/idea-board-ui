import React from 'react';
import { login } from '../../actions';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const Form = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(props.login)}>
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

class Login extends React.Component {

  render() {
    return <Form login={(data, event) => this.props.login(data)} />
  }

}

const mapDispatchToProps = dispatch => {
  return {
    login: async user => await dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);
