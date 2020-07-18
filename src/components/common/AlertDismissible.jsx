import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

export function AlertDismissible({ message, header, variant }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading> {header}</Alert.Heading>
        <p> {message} </p>
      </Alert>
    );
  }
  return null;
}
