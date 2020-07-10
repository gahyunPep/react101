import React from 'react';
import PropTypes from 'prop-types';

class WineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'chevrol-bel-air'
    };
  }

  static propTypes = {
    onSelectWine: PropTypes.func,
    wines: PropTypes.array,
    wine: PropTypes.object
  };

  onSelectWine = (id) => {
    this.setState({activeKey: id});
    this.props.onSelectWine(id);
  };

  render() {
    return(
      <div className="col s12 m6 l3">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          {
            this.props.wines.map(wine => {
              return  <a href="#!" 
                          className={this.state.activeKey !== wine.id ? "collection-item" : 'collection-item active'}
                          key={wine.id} 
                          onClick={ e => { this.onSelectWine(wine.id)}}>
                {wine.name}
              </a>
            })
          }
        </div>
      </div>
    );
  }

}

export default WineList;

