import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentButton extends Component {
  static PropTypes = {
    openCommentModal: PropTypes.func
  };

  openCommentModal = () => {
    this.props.onModalOpen();
  }

  render() {
    return(
      <a className="waves-effect waves-teal btn-flat" onClick={this.openCommentModal}>
      Comment <i className="material-icons left">comment</i>
      </a>
    );
  }
}

export default CommentButton;