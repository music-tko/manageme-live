
import React, { Component } from 'react';

const formatTime = (timeLeftInSecond) => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = '0' + minute;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = '0' + second;

  return `${minute}:${second}`;
}

class Times extends Component {
  render() {
    return (
      <div className="times">
        <div className="times-content">
          <label id="timer-label">{this.props.timeLabel}</label>
          <span id="time-left">{formatTime(this.props.timeLeftInSecond)}</span>
        </div>
      </div>
    )
  }
}

export default Times;