// Set up your application entry point here...
import React from 'react';
import CalcButton from './CalcButton';
/**
 * function InputNumber(props) {
 * 
    return <input type="number" value={props.num} />;
}
 */

function Sum(props) {
    return <p>Summe: {props.sum}</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        };
        this.calculateSum = this.calculateSum.bind(this);
        this.handleChangeNo1 = this.handleChangeNo1.bind(this);
        this.handleChangeNo2 = this.handleChangeNo2.bind(this);
    }
    calculateSum() {
        console.log(this.state);
        this.setState(prevstate => ({ sum: (prevstate.number1 + prevstate.number2) }));
    }
    handleChangeNo1(event) {
        this.setState({ number1: Number.parseInt(event.target.value)});
        this.calculateSum();
    }
    handleChangeNo2(event) {
        this.setState({ number2: Number.parseInt(event.target.value )});
        this.calculateSum();
    }
    render() {
        return (
            <div>
                <span>
                    <input type="number" value={this.state.number1} onChange={this.handleChangeNo1} />
                    +
                    <input type="number" value={this.state.number2} onChange={this.handleChangeNo2} />
                </span>
                <CalcButton extraFn={this.calculateSum} />
                <Sum sum={this.state.sum} />
            </div>
        );
    }
}

export default Calculator;
