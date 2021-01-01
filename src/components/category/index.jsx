import React from 'react';
import PropTypes from 'prop-types';
import { WithOutContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        { id: 'Thailand', text: 'Thailand' },
        { id: 'India', text: 'India' },
      ].concat(props.tags),
      suggestions: [
        { id: 'USA', text: 'USA' },
        { id: 'Germany', text: 'Germany' },
        { id: 'Austria', text: 'Austria' },
        { id: 'Costa Rica', text: 'Costa Rica' },
        { id: 'Sri Lanka', text: 'Sri Lanka' },
        { id: 'Thailand', text: 'Thailand' },
      ].concat(props.suggestions),
    };
  }

  handleChange = () => (this.props.handleChange || (() => {}))(this.state.tags);

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
    this.handleChange();
  }

  handleAddition = (tag) => {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
    this.handleChange();
  }

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
    this.handleChange();
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

Categories.defaultProps = {
  handleChange: () => {},
  tags: [],
  suggestions: [],
};

Categories.propTypes = {
  tags: PropTypes.instanceOf(Array),
  suggestions: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func,
};
