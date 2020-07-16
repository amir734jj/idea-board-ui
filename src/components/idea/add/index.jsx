import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';

const AddIdeaForm = ({ addIdea, categories }) => {
  const { register: formRegister, handleSubmit, errors } = useForm();

  return (
    <Form onSubmit={handleSubmit(addIdea)} className="pure-form pure-form-aligned">
      <FormGroup>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          className="form-control"
          id="title"
          isInvalid={errors.title}
          ref={formRegister({ required: true })}
        />
        {errors.title && <Form.Control.Feedback type="invalid">>This field is required</Form.Control.Feedback>}
      </FormGroup>
      <FormGroup>
        <Form.Label htmlFor="password">Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          className="form-control"
          id="description"
          isInvalid={errors.description}
          ref={formRegister({ required: true })}
          rows={10}
        />
        {errors.description && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
      </FormGroup>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" multiple>
          { categories.map((category) => (<option>{category}</option>))}
        </Form.Control>
      </Form.Group>
      <Button type="primary">Save</Button>
    </Form>
  );
};
export const AddIdea = (props) => (
  <>
    <h3>
      Introduce an Idea
    </h3>

    <div className="mt-4">
      <AddIdeaForm {...props} />
    </div>
  </>
);

const mapStateToProps = ({ category }) => ({
  categories: category.categories.map(({ name }) => name),
});

export default connect(mapStateToProps, null)(AddIdea);
