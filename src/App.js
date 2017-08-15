import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <form className="Form">
          <div>
              <label>Description</label>
              <input />
              <label>Action</label>
              <select>
                  <option>Go to URL</option>
              </select>
              <label>CSS Selector</label>
              <input />
          </div>
          <div>
              <label>Description</label>
              <input />
              <label>Action</label>
              <select>
                  <option>Write text</option>
              </select>
              <label>CSS Selector</label>
              <input />
              <label>Text</label>
              <input />
          </div>
          <div>
              <label>Description</label>
              <input />
              <label>Action</label>
              <select>
                  <option>Press key</option>
              </select>
              <label>Key</label>
              <select>
                  <option>ENTER</option>
              </select>
              <label>CSS Selector</label>
              <input />
          </div>
          <div>
              <label>Description</label>
              <input />
              <label>Action</label>
              <select>
                  <option>Add expectation</option>
              </select>
              <label>Expectation</label>
              <select>
                  <option>Contains</option>
              </select>
              <label>CSS Selector</label>
              <input />
              <label>Text</label>
              <input />
          </div>
          <button type="submit">Create</button>
      </form>
      </div>
    );
  }
}

export default App;
