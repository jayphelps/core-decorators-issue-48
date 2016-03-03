import 'babel-core/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { autobind } from 'core-decorators';

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        className={'btn ' + this.props.cssClass}>
          {this.props.children}
      </button>
    );
  }
}

class ActivityCalendar extends Component {
  state = {
    showCalendar: false
  };

  @autobind
  toggleCalendar() {
    console.log(this);
    this.setState({ showCalendar: !this.state.showCalendar })
  }

  render() {
    return (
      <div>
        <Button cssClass='btn--input' onClick={this.toggleCalendar}>
          {`${this.state.showCalendar}`}
          <span className='icon'></span>
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<ActivityCalendar />, document.getElementById('app'));
