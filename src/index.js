// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
// import ClockDiv from './components/Clock';
import ClickButton from './components/ClickButton';
require('./favicon.ico'); // Tell webpack to load favicon.ico

class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { count: 0 };
        this.timerId;
        this.setToNull = this.setToNull.bind(this);
    }
    tick() {

        console.log("tick " + this.state);
        this.setState((prevState, props) => ({ count: prevState.count + 1 }));
    }
    setToNull(){
        console.log("set to null, [this] ", this);
        this.setState({ count: 0 });
    }
    componentWillMount() {
        //this.timerId = setInterval(function(){this.tick()}, 1000); Own this binding WRONG!!!
        //this.timerId = setInterval(this.tick, 1000); Own this binding WRONG !!!
        this.timerId = setInterval(() => this.tick(), 1000);
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillUnMount() {
        clearInterval(this.timerId);
        console.log("componentWillMount");
    }
    render() {
        return (
            <div>
                <h1> Counter </h1>
                <h2> Every second {this.state.count} </h2>
                <ClickButton extraFn={this.setToNull} />
            </div>
        )
    }
}

render(
    <Clock title="fafsf" />, document.getElementById('app')
);

