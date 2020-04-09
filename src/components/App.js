import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'
import '../styles/styles.css';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (buttonName, state) => {
    this.setState = calculate(this.state, buttonName);
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel handleClick = {this.handleClick} />
      </div>
    );
  }
}
