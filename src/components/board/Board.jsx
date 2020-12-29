import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Project from '../project';

export const Board = ({ projects = [] }) => (
  <div>
    <Alert variant="warning">
      <Alert.Link href="/manage">Introduce an Idea</Alert.Link>.
      You have not shared any idea. Share one and get a feedback!
    </Alert>

    { projects.map((project, index) => (<Project key={index} {...project} />))}
  </div>
);

const mapStateToProps = (state) => ({
  ideas: state.idea.ideas,
});

export default connect(mapStateToProps, null)(Board);
