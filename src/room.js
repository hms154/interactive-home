import React from 'react';
import {Rect} from 'react-konva';
import Konva from 'konva';

class Room extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        color: 'green'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    }
    getColor() {
      return this.props.value ? 'yellow' : 'gray'
    }
    render() {
        return (
            <Rect
                x={200} y={0} width={50} height={50}
                fill={this.getColor()}
                //shadowBlur={10}
                stroke={'black'}
                strokeWidth={4}
                opacity={0.2}
                onClick={this.handleClick}
            />
        );
    }
}

export default Room;