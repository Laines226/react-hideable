// Set up your application entry point here...
import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state.count = 0;
    }
    render(){
        return(
            <div>
                <h1> Counter </h1>
                <h2> Every second {this.state.count} </h2>
            </div>
        );
    }
}

export default Clock;