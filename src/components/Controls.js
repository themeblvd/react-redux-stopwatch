import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseTimeBy, resetTimer } from '../store';

class Controls extends Component {
    constructor() {
        super();
        this.state = {
            interval: false
        };
    }

    handleStart = event => {
        const increaseTimeBy = this.props.increaseTimeBy;

        var interval = setInterval(function() {
            increaseTimeBy(100);
        }, 100);

        this.setState({
            interval: interval
        });
    };

    handleStop = event => {
        var interval = clearInterval(this.state.interval);

        this.setState({
            interval: interval
        });
    };

    handleReset = event => {
        this.props.resetTimer();
    };

    render() {
        console.log(this.props.time);
        return (
            <ul className="controls list-inline">
                <li>
                    <button
                        className="btn btn-xl start"
                        onClick={this.handleStart}
                    >
                        Start
                    </button>
                </li>
                <li>
                    <button
                        className="btn btn-xl stop"
                        onClick={this.handleStop}
                    >
                        Stop
                    </button>
                </li>
                <li>
                    <button
                        className="btn btn-xl reset"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => ({ time: state });
const mapDispatchToProps = { increaseTimeBy, resetTimer };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
