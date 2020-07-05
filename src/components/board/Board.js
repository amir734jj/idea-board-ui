import React from 'react';
import {connect} from "react-redux";

export const Board = ({ name }) => (<div>
  Welcome to {name}
</div>)


const mapStateToProps = ({global }) => {
  return {
    name: global.name
  };
}

export default connect(mapStateToProps, null)(Board);
