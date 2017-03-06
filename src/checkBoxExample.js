// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
require('./favicon.ico'); // Tell webpack to load favicon.ico

function Checkbox(props){
    return <div> <input type="checkbox" value={props.cbValue} name={props.groupName} /> {props.text} </div>;
};

function SubmitButton(props){
    return <button>{props.text}</button>
};

function App(){
    return(
        <div>
            <Checkbox cbValue="test1" groupName="testGroup" text="Test 1" />
            <Checkbox cbValue="test2" groupName="testGroup" text="Test 2" />
            <Checkbox cbValue="test3" groupName="testGroup" text="Test 3" />
            <SubmitButton text="Submit" />
        </div>
    );
}

render(
    <App />, document.getElementById('app')
);