import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../actions';
import { AlertDismissible } from '../common/AlertDismissible';

export class Category extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { error } = this.props;

    return (
      <>
        { error ? <AlertDismissible header="Login Failed" message={error.join('\n')} variant="danger" /> : null }
      </>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  error: category.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
