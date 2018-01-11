import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Icon type="link" />
      </div>
    );
  }
}

export default App;