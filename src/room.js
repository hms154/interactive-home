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
                x={this.props.startX} y={this.props.startY} width={this.props.width} height={this.props.height}
                fill={this.getColor()}
                //shadowBlur={10}
                stroke={'black'}
                strokeWidth={this.props.strokeWidth}
                opacity={0.2}
                onClick={this.handleClick}
            />
        );
    }
}

export default Room;