import React, { Component } from 'react';

class ForecastItem extends Component {
  render() {
    return (
      <ul className="forecast-item">
        <li><strong>{this.props.day + ', ' + this.props.date}</strong></li>
        <li>{'High: ' + this.props.high} &deg;C</li>
        <li>{'Low: ' + this.props.low} &deg;C</li>
        <li><img src={'http://l.yimg.com/a/i/us/we/52/' + this.props.code + '.gif'} alt={this.props.text}/></li>
        <li>{this.props.text}</li>
      </ul>
    );
  }
}

export default ForecastItem;
