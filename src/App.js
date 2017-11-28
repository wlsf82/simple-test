import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

function DataSelect({ obj, name }) {
    return (
        <select name={name}>
            {obj.map((item => (
                <option
                    key={item.description}
                    value={item.description}
                >
                    {item.description}
                </option>
            )))}
        </select>
    );
}

class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    render() {
        const { actions, expectations } = this.props.store;
        return (
            <div className="App">
            <form className="Form">
                <div>
                    <label>Description</label>
                    <input />

                    <label>Action</label>
                    <DataSelect obj={actions} />

                    <label>CSS Selector</label>
                    <input />
                </div>
                <div>
                    <label>Description</label>
                    <input />

                    <label>Action</label>
                    <DataSelect obj={actions} />

                    <label>CSS Selector</label>
                    <input />

                    <label>Text</label>
                    <input />
                </div>
                <div>
                    <label>Description</label>
                    <input />

                    <label>Action</label>
                    <DataSelect obj={actions} />

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
                    <DataSelect obj={actions} />

                    <label>Expectation</label>
                    <DataSelect obj={expectations} />

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
