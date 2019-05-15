import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    greeting: null
  };

  async componentDidMount() {
    const res = await fetch('/api/hello');
    const greeting = await res.text();
    this.setState({greeting});
  }

  render() {
    const {greeting} = this.state;
    return (
      <div className="App">
        {greeting}
      </div>
    );
  }
}

export default App;
