import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseTimeBy, resetTimer } from '../store';

class Controls extends Component {
    constructor() {
        super();
        this.state = {
            interval: false,
            isRunning: false
        };
    }

    handleStart = event => {
        if (!this.state.isRunning) {
            const increaseTimeBy = this.props.increaseTimeBy;

            var interval = setInterval(function() {
                increaseTimeBy(100);
            }, 100);

            this.setState({
                interval: interval,
                isRunning: true
            });
        }
    };

    handleStop = event => {
        if (this.state.isRunning) {
            var interval = clearInterval(this.state.interval);

            this.setState({
                interval: interval,
                isRunning: false
            });
        }
    };

    handleReset = event => {
        if (!this.state.isRunning) {
            this.props.resetTimer();
            this.setState({ isRunning: false });
        }
    };

    render() {
        return (
            <ul className="controls list-inline">
                <li>
                    <button
                        className={
                            this.state.isRunning
                                ? 'btn btn-xl start muted'
                                : 'btn btn-xl start'
                        }
                        onClick={this.handleStart}
                    >
                        Start
                    </button>
                </li>
                <li>
                    <button
                        className={
                            this.state.isRunning
                                ? 'btn btn-xl stop'
                                : 'btn btn-xl stop muted'
                        }
                        onClick={this.handleStop}
                    >
                        Stop
                    </button>
                </li>
                <li>
                    <button
                        className={
                            this.state.isRunning || !this.props.time
                                ? 'btn btn-xl reset muted'
                                : 'btn btn-xl reset'
                        }
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
