import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { ViewProject } from '../project';
import { getAllProjects } from '../../selectors';

export const Board = ({ projects = [] }) => (
  <div>
    <Alert variant="warning">
      <Alert.Link href="/manage">Introduce an Idea</Alert.Link>.
      You have not shared any idea. Share one and get a feedback!
    </Alert>

    { projects.map((project, index) => (<ViewProject key={index} {...project} />))}
  </div>
);

const mapStateToProps = (state) => ({
  projects: getAllProjects(state),
});

export default connect(mapStateToProps, null)(Board);
