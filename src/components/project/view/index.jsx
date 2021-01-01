import React from 'react';
import {
  Button, Card, Row, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';

const ViewProject = ({ project: { header, title, body } }) => (
  <div>
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Row>
          <Col md={{ offset: 10, span: 2 }}>
            <Button variant="success">Read more</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
);

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  project: state.project.byId[id],
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject);
