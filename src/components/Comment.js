import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object
  };

  render(){
    return(
      <p className="comment" data-title={this.props.comment.title} data-date={this.props.comment.date}>
        {this.props.comment.content}
      </p>
    );
  }
}

export default Comment;