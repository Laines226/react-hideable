// Set up your application entry point here...
import React from 'react';

class ClickButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            test: "Lalalal"
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("handleClick");
        this.setState(prevState  => ({toggle : !prevState .toggle}));
        
        if(this.props.extraFn !== undefined){
            console.log("this.props.extraFn !== undefined", this.props);
            this.props.extraFn();
        }
        console.log('Yay we found the name', this.myButton.name);
        console.log('Is the prop available [looking for name]',this);
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this, 23)} 
                ref={(button) => {this.myButton = button}} name="Linus' button">test</button>
                <p>toggle:  {this.state.toggle ? "True" : "False"} </p>
            </div>
        );
    }
}

ClickButton.defaultProps = {
    toggle: false
}

ClickButton.propTypes = {
    toggle : React.PropTypes.bool.isRequired
}

export default ClickButton;