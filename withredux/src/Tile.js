import React from 'react';
import colors from './colors.json';

class Tile extends React.Component {

    render() {
        return (
        <div style = {
                {
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height:'100px',
                width:'100px',
                margin:'10px',
                userSelect:'none',
                cursor:'pointer',
                backgroundColor:colors[this.props.clickCount]
                }
            }
            onClick = {this.props.onChildClick()}>
            <span>{this.props.clickCount}</span>
        </div>);
    }
}

export default Tile;

//Higher-Order function is a function that receives a 
//function as an argument or returns the function as output.