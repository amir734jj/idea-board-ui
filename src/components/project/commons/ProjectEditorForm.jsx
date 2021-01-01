import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup } from 'react-bootstrap';

const ProjectEditorForm = ({ submitHandler, categories, project }) => {
  const { register: formRegister, handleSubmit, errors } = useForm(project);

  return (
    <Form onSubmit={handleSubmit(submitHandler)} className="pure-form pure-form-aligned">
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
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" ref={formRegister({ required: true })} name="categories" multiple>
          { categories.map((category, index) => (<option key={index}>{category}</option>))}
        </Form.Control>
      </Form.Group>
      <Button type="primary">Save</Button>
    </Form>
  );
};

export default ProjectEditorForm;
