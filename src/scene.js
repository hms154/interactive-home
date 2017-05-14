import React from 'react';
import Thing from './thing';

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
      const lights = [1, 2, 3];
      return (
        <div>
          {lights.map((light) => this.createThing(light))}        
        </div>
      )
  }
  createThing(light) {
    return (
      <div key={light}>
        <Thing name={light.toString()} value={this.state.things[light]} />
        <button onClick={() => this.doAction(light)}>Turn on the light</button>
      </div> 
    )
  }

  doAction(light) {
      const lights = this.state.things.slice();
      lights[light] = !(this.state.things[light])
      this.setState({
          things: lights
      });
  }

  componentDidMount() {
    this.setState({ thing: false });
  }
}

export default Scene;
