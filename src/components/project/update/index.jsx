import React from 'react';
import { connect } from 'react-redux';
import { updateProject as updateProjectAction } from '../../../actions';
import { AlertDismissible } from '../../common';
import ProjectEditorForm from '../commons/ProjectEditorForm';
import { getAllCategories } from '../../../selectors';

export class UpdateProject extends React.Component {
  saveProjectHandler = async ({ categories, ...idea }) => {
    const { history } = this.props;
    const data = {
      ...idea,
      categories: this.props.categories.filter(({ name }) => categories.includes(name)),
    };
    await this.props.saveProjectHandler(data);
    history.push('/profile');
  }

  render() {
    const categories = this.props.categories.map(({ name }) => name);

    return (
      <>
        <h3> Introduce an Side Project </h3>

        <div className="mt-4">
          {this.props.error && <AlertDismissible header="Login Failed" message={this.props.error.join('\n')} variant="danger" />}
          <ProjectEditorForm categories={categories} submitHandler={this.saveProjectHandler} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  project: state.project.byId[id],
  categories: getAllCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateProjectHandler: (idea) => dispatch(updateProjectAction(idea)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
