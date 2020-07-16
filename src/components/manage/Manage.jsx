import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const Manage = ({ }) => {
  const history = useHistory();

  return (
    <div>

      <Button variant="success" onClick={() => history.push('/idea/new')}>Introduce Idea</Button>
    </div>
  );
};

const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps, null)(Manage);
