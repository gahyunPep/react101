import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {

  static PropTypes = {
    comments: PropTypes.array
  };

  render() {
    return (
      <div>
        <h5>Comments</h5>
        { this.props.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </div>
    );
  }
}

export default CommentList;