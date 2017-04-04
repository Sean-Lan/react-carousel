import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import dog1 from './images/dog1.jpg';
import dog2 from './images/dog2.jpg';
import dog3 from './images/dog3.jpg';
import dog4 from './images/dog4.jpg';
import dog5 from './images/dog5.jpg';

import Carousel from '../Carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: props.imgs || [dog1, dog2, dog3, dog4, dog5],
      current: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const imgCount = this.state.imgs.length;
    this.setState({current: (this.state.current+1) % imgCount});
  }

  getCurrentImage() {
    return this.state.imgs[this.state.current];
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Carousel Transition Demo</h2>
        </div>
        <button className={'btn-next'} onClick={this.handleClick}>NEXT PICTURE</button>
        <Carousel imageSrc={this.getCurrentImage()} />
      </div>
    );
  }
}

App.propTypes = {
  imgs: PropTypes.array
};

export default App;
