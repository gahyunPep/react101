import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { likeWine } from './APIService';
import { unlikeWine } from './APIService';
import { isWineLiked } from './APIService';

export class LikeButton extends Component {
  
  static propTypes = {
    wine: PropTypes.object,
    startCounterAt: PropTypes.number
  };

  state = {
    liked: false
  };

  componentDidMount(){
    this.getLikeStatus();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.wine !== this.props.wine) || (prevState.liked !== this.state.liked)) {
      this.getLikeStatus();
    }
  }

  onUnlikeClicked = () => {
    unlikeWine(this.props.wine.id);
    this.setState({liked: false})
  }

  onLikeClicked = () => {
    likeWine(this.props.wine.id);
    this.setState({liked: true})
  }

  getLikeStatus = () => {
    isWineLiked(this.props.wine.id)
    .then((data) => {
      this.setState({ liked: data.like })
    });
  }

  getLikeButton = (isLiked) => {
    if(isLiked){
      return (      
      <a className="waves-effect waves-teal btn-flat" onClick = { e=> this.onUnlikeClicked() }>
        <span>Unlike <i className="material-icons left">thumb_down</i></span>
      </a>
      );
    }
    return (
      <a className="waves-effect waves-teal btn-flat" onClick = { e=> this.onLikeClicked() }>
        <span>Like <i className="material-icons left">thumb_up</i></span>
      </a>
    );
  }

  render() {
    const isLiked = this.state.liked;
    return this.getLikeButton(isLiked);
  }

}

export default LikeButton;