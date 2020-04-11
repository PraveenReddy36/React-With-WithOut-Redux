import React from 'react';
import Tile from './Tile';
import {connect} from 'react-redux';
import clickOnTile from './actions/tileAction';

class Wall extends React.Component {

  render() {

    const tilesArray = [];

    for(let i=0; i<100; i++) {
      tilesArray.push(<Tile onChildClick = {()=> this.props.onChildClick(i)} clickCount= {this.props.reducer[i]}/>);
    }

    console.log("props", this.props);
    return(
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {tilesArray}
      </div>);
  }
}

const mapStateToProps = (store) => {
  return store;
}


const mapDispatchToProps = dispatch => {

  return {
    onChildClick : (tileNumber)=> dispatch(clickOnTile(tileNumber))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
