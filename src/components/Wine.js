import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import CommentList from './CommentList';
import CommentButton from './CommentButton';
import CommentModal from './CommentModal';
import { fetchComments, commentWine } from './APIService';

class Wine extends Component {
  static propTypes = {
    wine: PropTypes.object
  };

  static defaultProps = {
    wine: {
      name: 'Some wine'
    }
  };

  state = {
    isOpen: false,
    comments: []
  };

  handleModalOpen = () => {
    this.setState({isOpen: true});
  }

  handleModalClose = () => {
    this.setState({isOpen: false});
  }

  handleSubmit = async (content) => {
    this.setState({
      comments: [].concat(this.state.comments, {title: '', content})
    });

    try {
      await commentWine(this.props.selectedWine.id, content);
      this.handleModalClose();
    }catch (err) {
      this.setState({
        comments: this.state.comments.filter(
          (item) => item.content != content
        )
      });
    }
  }
  
  componentDidMount(){
    fetchComments(this.props.selectedWine.id)
      .then((data) => {
        this.setState({ comments: data});
      })
  }

  componentDidUpdate(prevProps){
    if(this.props.selectedWine !== prevProps.selectedWine) {
      fetchComments(this.props.selectedWine.id)
      .then((data) => {
        this.setState({ comments: data});
      })
    }
  }
  
  render() {
    return (
      <div className="col s12 m12 l6">
        <h2 className="center-align">Wine details</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src={`https://wines-api.herokuapp.com/api/wines/${this.props.selectedWine.id}/image`} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{this.props.selectedWine.name}</h3>
              <br/>
              <p><b>Appellation:</b> {this.props.selectedWine.appellation.name}</p>
              <p><b>Region:</b> {this.props.selectedWine.appellation.region}</p>
              <p><b>Color:</b> {this.props.selectedWine.type}</p>
              <p><b>Grapes:</b> {this.props.selectedWine.grapes.join(", ")}</p>
              <CommentList comments={this.state.comments}/>
            </div>

            <div className="card-action">
              <LikeButton wine={this.props.selectedWine}/>
              <CommentButton onModalOpen={this.handleModalOpen}/>
              <CommentModal isOpen={this.state.isOpen} onModalClose={this.handleModalClose} onSubmit={this.handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

} 

export default Wine;