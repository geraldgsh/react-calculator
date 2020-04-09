import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/styles.css';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
