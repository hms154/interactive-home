import React from 'react';
import Thing from './thing';
import { Button, ButtonGroup, Row, Col, Container, Jumbotron } from 'reactstrap';
import {Layer, Stage, Text, Line, Rect, Group} from 'react-konva';
import Room from './room';

class Scene extends React.Component {
  constructor() {
    super();
    this.state = { things: Array(3).fill(false) };
  }

  render() {
    let home = this.createHome();
    return home;
  }

  createHome() {
      return (
        <div>
          <Jumbotron fluid>
            <h1>Try Lighting</h1>
            <hr/>
            <Container>
                {this.createThing(0)}
            </Container>
          </Jumbotron>
        </div>
      )
  }
  createThing(light) {
    var height = window.innerHeight > 400 ? 400 : window.innerHeight
    var width = window.innerWidth > 400 ? 400 : window.innerWidth
    var startPosition = {x: 0, y: 0}

    var pad_style={
      padding: '20px'
    }
    return (
      <Row>
        {this.createActionButtons()}
        <Col key={light}>
          <Row>
            <Stage width={width} height={height}>
              {this.createBaseLayer(width, height, startPosition)}
              {this.createRooms()}
              {this.createRoomLabels()}
            </Stage>
          </Row>
        </Col>
      </Row>
    )
  }

  createActionButtons() {
    return (
       <Col>
          <Row>
            <Button size='sm' color='link' onClick={() => this.doAction(0)}>Bedroom lights</Button>
          </Row>
          <Row>
            <Button size='sm' color='link' onClick={() => this.doAction(1)}>Master Bedroom Lights</Button>
          </Row>
          <Row>
            <Button size='sm' color='link' onClick={() => this.doAction(2)}>Living Room Lights</Button>
          </Row>
          <Row>
            <Button size='sm' color='link' onClick={() => this.doGroupAction(true)}>
              Turn Lights On
            </Button>
          </Row>
          <Row>
            <Button size='sm' color='link' onClick={() => this.doGroupAction(false)}>
              Turn Lights Off
            </Button>
          </Row>
        </Col>
    )
  }

  createBaseLayer(width, height, startPosition) {
    return (
        <Layer>
            <Room width={width} height={height} strokeWidth={0}/>
            <Rect x={0} y={0} width={width} height={height} stroke='black' strokeWidth={4} opacity={0.4}/>
        </Layer>
    )
  }

  createRooms() {
    return (
        <Layer>
            {this.createBedroom()}
            {this.createMasterBedroom()}
            {this.createLivingRoom()}
        </Layer>
    )
  }

  createBedroom() {
    return (
      <Group>
          <Room startX={0} startY={0} width={200} height={140} value={this.state.things[0]}/>
          <Line points={[0, 0, 200,0, 200, 140, 40, 140]} stroke='black' strokeWidth={2} opacity={0.4}/>
          <Line points={[0, 140, 20,140]} stroke='black' strokeWidth={2} opacity={0.4}/>
          <Line points={[20, 140, 40, 120]} stroke='black' strokeWidth={4} opacity={0.4}/>
      </Group>
    )
  }

  createMasterBedroom() {
    return (
      <Group>
          <Room startX={200} startY={0} width={200} height={140} value={this.state.things[1]}/>
          <Line points={[200, 140, 360, 140]} stroke='black' strokeWidth={2} opacity={0.4}/>
          <Line points={[380, 140, 400, 140]} stroke='black' strokeWidth={2} opacity={0.4}/>
          <Line points={[380, 140, 360, 120]} stroke='black' strokeWidth={4} opacity={0.4}/>
      </Group>
    )
  }

  createLivingRoom() {
    return (
        <Group>
          <Room startX={0} startY={140} width={400} height={400} value={this.state.things[2]}/>
          <Line points={[200, 140, 200, 400]} stroke='black' strokeWidth={1} opacity={0.4} dash={[10,5]}/>
          <Line points={[40, 400, 60, 400]} stroke='black' strokeWidth={12} opacity={0.4}/>
        </Group>
    )
  }

  createRoomLabels() {
    return (
        <Layer>
            <Text x={80} y={20} text='Bedroom' opacity={0.4}/>
            <Text x={260} y={20} text='Master Bedroom' opacity={0.4}/>
            <Text x={80} y={160} text='Living Room' opacity={0.4}/>
            <Text x={260} y={160} text='Kitchen' opacity={0.4}/>
        </Layer>
    )
  }

  doAction(light) {
      const lights = this.state.things.slice();
      lights[light] = !(this.state.things[light])
      this.setState({
          things: lights
      });
  }

  doGroupAction(targetstate) {
    const lights = this.state.things.map((light) => {
      return targetstate
    })
    this.setState({
        things: lights
    });
  }

  componentDidMount() {
    this.setState({ thing: false });
  }
}

export default Scene;
