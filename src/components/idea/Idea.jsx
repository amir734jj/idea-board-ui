import React from 'react';
import {
  Button, Card, Row, Col,
} from 'react-bootstrap';

const Idea = ({ header, title, body }) => (
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

export default Idea;
