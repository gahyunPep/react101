import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { commentWine } from './APIService';

class CommentModal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {comment: ''};
  }

  static propTypes = {
    isOpen: PropTypes.bool
  };

  closeModal = () => {
    this.props.onModalClose();
  }

  componentDidUpdate(prevProps) {
      if(this.props.isOpen){
        window.$(this.modalNode).openModal();
      }else{
        window.$(this.modalNode).closeModal();
      }
  }

  handleChange = (event) => {
    this.setState({comment: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.onSubmit(this.state.comment);
  }


  render() {
    return(
      <div className="modal" ref={ref => this.modalNode = ref}>
        <div className="modal-content">
          <h4>Tell us something about this wine</h4>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="inputComment" type="text" className="validate" value={this.state.value} onChange={this.handleChange} />
                <label htmlFor="inputComment">Your comment</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Submit</a>
          <a href="#!" className="modal-action waves-effect waves-green btn-flat" onClick={this.closeModal}>Cancel</a>
        </div>
      </div>
    );
  }

}

export default CommentModal;