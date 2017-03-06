// Set up your application entry point here...
import React from 'react';

class CalcButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("handleClick");
        if(this.props.extraFn !== undefined){
            console.log("this.props.extraFn !== undefined", this.props);
            this.props.extraFn();
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} >calculate</button>
            </div>
        );
    }
}

export default CalcButton;