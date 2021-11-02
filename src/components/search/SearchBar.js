import React, { Component } from 'react';
import '../../App.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Pokemon"
            className="form-control mx-auto format4"
            style={{
              backgroundColor: 'white transparent',
              height: '1.75em',
              width: '95%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.75em'
            }}
          />
        </form>
      </div>
    );
  }
}