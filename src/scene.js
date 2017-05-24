import React from 'react';
import Thing from './thing';
import { Button, ButtonGroup, Row, Col, Container, Jumbotron } from 'reactstrap';

class Scene extends React.Component {
  constructor() {
    super();
    this.state = { things: Array(3).fill(false) };
  }
  
  render() {
    let things = this.createThings();
    return things;
  }

  createThings() {
      const lights = [0, 1, 2];
      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                {lights.map((light) => this.createThing(light))}
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <ButtonGroup>
                  <Button size='sm' color='link' onClick={() => this.doGroupAction(true)}>
                    Turn Lights On
                  </Button>
                  <Button size='sm' color='link' onClick={() => this.doGroupAction(false)}>
                    Turn Lights Off
                  </Button>
                </ButtonGroup>
              </Row>
            </Container>
          </Jumbotron>        
        </div>
      )
  }
  createThing(light) {
    return (
      <Col key={light}>
        <Thing name={light.toString()} value={this.state.things[light]} />
        <Button size='sm' outline color='primary' onClick={() => this.doAction(light)}>Turn on the light</Button>
      </Col>
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
