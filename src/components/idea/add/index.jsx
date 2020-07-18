import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { history } from 'react-router-dom';
import { saveIdea as saveIdeaAction } from '../../../actions';
import { AlertDismissible } from '../../common/AlertDismissible';

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

export class AddIdea extends React.Component {
  handleAddIdea = async ({ categories, ...idea }) => {
    const data = {
      ...idea,
      categories: this.props.categories.filter(({ name }) => categories.includes(name)),
    };
    await this.props.addIdea(data);
    history.push('/profile');
  }

  render() {
    const categories = this.props.categories.map(({ name }) => name);

    return (
      <>
        <h3>
          Introduce an Idea
        </h3>

        <div className="mt-4">
          {this.props.error ? <AlertDismissible header="Login Failed" message={this.props.error.join('\n')} variant="danger" /> : null}
          <AddIdeaForm categories={categories} addIdea={this.handleAddIdea} />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ category: { categories } }) => ({
  categories,
});

const mapDispatchToProps = (dispatch) => ({
  addIdea: (idea) => dispatch(saveIdeaAction(idea)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIdea);
