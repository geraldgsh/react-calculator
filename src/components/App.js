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
  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    let calc = '';
    const { total, next } = this.state;
    if (total !== null) {
      calc = total;
    } else if (next !== null) {
      calc = next;
    }
    return (
      <div className="app">
        <Display calc={calc} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
