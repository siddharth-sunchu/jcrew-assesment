import React, { Component } from 'react';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#333'}}>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 5
                }
              }
            }
          }}
          style={{
            width: '100%',
            backgroundColor: '#333'
          }}
        />
      </div>
    );
  }
}

export default App;
