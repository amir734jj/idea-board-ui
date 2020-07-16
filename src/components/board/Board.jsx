import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Idea from '../idea';

export const Board = ({ ideas }) => (
  <div>
    <Alert variant="warning">
      <Alert.Link href="/manage">Introduce an Idea</Alert.Link>.
      You have not shared any idea. Share one and get a feedback!
    </Alert>

    {/*{ ideas.map((idea, index) => (<Idea key={index} {...idea} />))}*/}
  </div>
);

const mapStateToProps = (state) => ({
  ideas: state.idea.ideas,
});

export default connect(mapStateToProps, null)(Board);
