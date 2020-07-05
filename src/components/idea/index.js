import React from 'react';
import {Button, Card} from "react-bootstrap";

export const Idea = ({ header, title, body }) => (<div>
  <Card>
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {body}
      </Card.Text>
      <Button variant="primary">Continue</Button>
    </Card.Body>
  </Card>
</div>)
