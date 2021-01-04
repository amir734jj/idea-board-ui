import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Badge, Container, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Element = ({ onRemove, value, index }) => (
  <Badge variant="secondary" style={{ marginRight: '0.5rem', fontSize: '1rem' }}>{value} {' '}
    <FontAwesomeIcon icon={faTimes} onClick={() => onRemove(index)} />
  </Badge>
);

export const InputTags = ({ values, handleChange }) => {
  const [terms, setTerms] = useState(values);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setTerms(values);
  }, [values]);

  const onChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const onKeyUp = (event) => {
    const { key } = event;
    const currentValue = value.trim().replace(/,$/, '');
    if ((key === 'Enter' || key === ' ' || key === ',') && currentValue !== '') {
      event.preventDefault();

      const newTerms = [...terms, currentValue];
      (handleChange || (() => {}))(newTerms);
      setTerms(newTerms);
      setValue('');
    }
  };

  const handleRemove = (index) => {
    const newTerms = terms.filter((_, i) => i !== index);
    setTerms(newTerms);
    (handleChange || (() => {}))(newTerms);
  };

  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Categories</Form.Label>
        <Container fluid style={{ marginBottom: '1rem' }}>
          {terms.map((item, index) => (
            <Element
              key={`${item}${index}`}
              value={item}
              index={index}
              onRemove={handleRemove}
            />
          ))}
        </Container>
        <Form.Control
          ref={inputRef}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          type="text"
          placeholder="Enter tags"
        />
        <Form.Text className="text-muted">
          Select categories of this project and press space or comma
        </Form.Text>
      </Form.Group>
    </>
  );
};

InputTags.defaultProps = {
  handleChange: () => {},
  values: [],
};

InputTags.propTypes = {
  values: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func,
};

export default InputTags;
