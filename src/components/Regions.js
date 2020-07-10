import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'Bordeaux'
    }
  }
  
  
  static propTypes = {
    onSelectRegion: PropTypes.func,
    regions: PropTypes.array,
    region: PropTypes.string
  };

  // this function - delegate it to the parents
  onSelectRegion = (region) => {
    this.setState({activeKey: region});
    this.props.onSelectRegion(region);
  };

  render() {
    return(
      <div className="col s12 m6 l3">
        <h2 className="center-align">Regions</h2>
        <div className="collection">
          {
            this.props.regions.map(region => {
              return <a href="#" className={this.state.activeKey !== region ?"collection-item" : "collection-item active"} key={region} onClick={ e => this.onSelectRegion(region)}>
                {region}
              </a>
            })
          }
        </div>
      </div>
    );
  };
};

export default Regions;