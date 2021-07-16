import React, { Component } from 'react';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#333' }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
        />
      </div>
    );
  }
}

export default App;
