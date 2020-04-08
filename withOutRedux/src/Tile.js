import React from 'react';
import './Tile.css';
import colors from './colors.json';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleOnClickEvent = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return(
            <div style={{
                backgroundColor: colors[this.state.count],
                alignItems:'center',
                justifyContent:'center',
                padding: '5px',
                margin: '10px',
                width: '100px',
                height: '100px',
                userSelect:'none',
                cursor:'pointer',
                display: 'flex'
                }}
                onClick={this.handleOnClickEvent}>
                <span style= {{
                    color:'white'
                }}>
                    {this.state.count}
                </span>
                    
            </div>
        );
    }
}


export default Tile;