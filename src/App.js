import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import Controls from './components/Controls';
import Timer from './components/Timer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Timer />
                <Controls />
            </div>
        );
    }
}

export default App;
