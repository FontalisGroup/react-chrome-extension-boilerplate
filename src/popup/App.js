import React, { Component } from 'react';

import Routes from './container/Routes/Routes';
import Bootstrapper from './Bootstrapper';

class App extends Component {
  render() {
    return (
      <Bootstrapper>
        <div>
          <Routes initialRouteIndex={0} />
        </div>
      </Bootstrapper>
    );
  }
}

export default App;
