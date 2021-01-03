import React from 'react';
import { connect } from 'react-redux';
import InputTags from '../../common/TagsInput';
import { getAllCategories } from '../../../selectors';
import { getCategories as getCategoriesAction, saveCategory as saveCategoryAction } from '../../../actions';

class Category extends React.Component {
  componentDidMount() {
    this.props.getCategoriesHandler();
  }

  inputTagsChangeHandler = async (updatedTerms) => {
    const { categories, handleChange, saveCategoryHandler } = this.props;

    const toBeUpdatedCategories = updatedTerms
      .map((name) => !categories.find((y) => y.name === name));

    const response = await Promise.all(toBeUpdatedCategories
      .map((name) => ({ name }))
      .map((x) => saveCategoryHandler(x)));

    const allNewCategories = categories.concat(response.map(({ payload }) => payload));

    const categoriesUpdatedSubset = allNewCategories
      .filter(({ name }) => updatedTerms.includes(name));

    handleChange(categoriesUpdatedSubset);
  }

  render() {
    const { categories } = this.props;
    const terms = categories.map(({ name }) => name);
    return (
      <InputTags
        values={terms}
        handleChange={this.inputTagsChangeHandler}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  categories: getAllCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCategoriesHandler: () => dispatch(getCategoriesAction()),
  saveCategoryHandler: (category) => dispatch(saveCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
