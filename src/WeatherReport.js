import React, { Component } from 'react';

class Cities extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="Vancouver">Vancouver</option>
          <option value="Kelowna">Kelowna</option>
          <option value="Toronto">Toronto</option>
          <option value="Quebec">Quebec</option>
          <option value="Halifax">Halifax</option>
        </select>
      </div>
    );
  }
}

export default Cities;
