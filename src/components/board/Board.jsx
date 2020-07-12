import React from 'react';
import { connect } from 'react-redux';
import Idea from '../idea';

export const Board = ({ ideas }) => (
  <div>
    { ideas.map((idea, index) => (<Idea key={index} {...idea} />))}
  </div>
);

const mapStateToProps = (state) => ({
  ideas: state.idea.ideas,
});

export default connect(mapStateToProps, null)(Board);
