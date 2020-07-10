import React from 'react';
import {connect} from "react-redux";
import {Idea} from "../idea";

export const Board = ({ ideas }) => (<div>
  { ideas.map(idea => (<Idea {...idea} />))}
</div>)


const mapStateToProps = (state) => {
  return {
    ideas: state.idea.ideas
  };
}

export default connect(mapStateToProps, null)(Board);
