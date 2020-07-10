import React from 'react';
import Regions from './Regions';
import WineList from './WineList';
import Wine from './Wine';

class WineApp extends React.Component {

  state= {
    regions: [],
    selectedRegion: 'Bordeaux',
    wines: [],
    selectedWine: {id:"chevrol-bel-air", name:"Château Chevrol Bel Air", type:"Rouge", appellation:{"name":"Lalande-de-Pomerol","region":"Bordeaux"}, grapes:["Cabernet Sauvignon","Merlot","Cabernet Franc"]}
  };

  componentDidMount(){

    this.props.fetchRegions()
      .then(data => {
        this.setState({regions: data});
      });

    this.props.fetchWinesFrom(this.state.selectedRegion)
      .then(data => {
        this.setState({wines: data});
      });

  }

  onSelectRegion = (region) => {
    this.setState({ selectedRegion: region }, ()=>{
      this.props.fetchWinesFrom(this.state.selectedRegion)
      .then(data => {
        this.setState({wines: data});
      });
    });
  };

  onSelectWine = (id) => {
    this.props.fetchWine(id)
      .then(data => this.setState({ selectedWine: data }));
  }

  render() {
    return(
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="row">
          <Regions regions={this.state.regions} region={this.state.selectedRegion} onSelectRegion={this.onSelectRegion} />
          <WineList wines={this.state.wines} onSelectWine={this.onSelectWine}/>
          <Wine selectedWine={this.state.selectedWine}/>
        </div>
    </div>
    );

  }
}

export default WineApp;