import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { ViewProject } from '../project';
import { getAllProjects } from '../../selectors';
import * as PropTypes from "prop-types";
import {saveProject as saveProjectAction} from "../../actions";

export class Board extends React.Component {

  componentDidMount() {
    this.getAllProjectsHandler();
  }

  render() {
    let {projects} = this.props;
    return (
      <div>
        <Alert variant="warning">
          <Alert.Link href="/manage">Introduce an Idea</Alert.Link>.
          You have not shared any idea. Share one and get a feedback!
        </Alert>

        {projects.map((project, index) => (<ViewProject key={index} {...project} />))}
      </div>
    );
  }
}

Board.propTypes = {projects: PropTypes.arrayOf(PropTypes.any)}

Board.defaultProps = {projects: []}

const mapStateToProps = (state) => ({
  projects: getAllProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveProjectHandler: (idea) => dispatch(geTall(idea)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
