// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
require('./favicon.ico'); // Tell webpack to load favicon.ico

const formatUserName = (somePerson) => {
    return "fn: " + somePerson.firstName + " ln: " + somePerson.lastName;
};

const someOne = {
    firstName: "Linus",
    lastName: "Niedermaier"
};

var anotherOne = someOne;
anotherOne.firstName = "NotLinus";
const element = (
    <div>
        <h2> {formatUserName(anotherOne)} </h2>
    </div>
);

const bigElement = React.createElement(
    'div',
    { className: "bigElement" },
    React.createElement('h1',
        { className: "header" },
        "Hello There"),
    element
);

const sameBigElement = (
    <div className="same">
        <h1 className="nearySame">
            Hello Again
        </h1>
        {element}
    </div>
);
let count = 0;

const countUp = function () {
    count++;
    const clockDiv = (
        <div>
            {count}
        </div>
    );
    render(
        clockDiv, document.getElementById('app')
    );
};
setInterval(countUp, 1000);

