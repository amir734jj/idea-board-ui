import React from 'react';
import { connect } from 'react-redux';
import { saveProject as saveProjectAction } from '../../../actions';
import { AlertDismissible } from '../../common';
import ProjectEditorForm from '../commons/ProjectEditorForm';

class AddProject extends React.Component {
  saveProjectHandler = async (project) => {
    const { history } = this.props;
    await this.props.saveProjectHandler(project);
    history.push('/');
  }

  render() {
    return (
      <>
        <h3> Introduce Your Side Project </h3>

        <div className="mt-4">
          {this.props.error && <AlertDismissible header="Login Failed" message={this.props.error.join('\n')} variant="danger" />}
          <ProjectEditorForm project={{ categories: [] }} submitHandler={this.saveProjectHandler} />
        </div>
      </>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  saveProjectHandler: (idea) => dispatch(saveProjectAction(idea)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
