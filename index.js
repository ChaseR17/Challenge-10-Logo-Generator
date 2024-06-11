const inquirer = require("inquirer");

    inquirer.prompt([
        // shape pick
        {
            type: "list",
            name: "shape",
            message: "Which type of shape?",
            choices: ["Circle", "Triangle", "Square"]
        },
        // color of shape
        {
            type: "input",
            name: "shapeColor",
            message: "What color shape?"
        },
        // text
        {
            type: "input",
            name: "text",
            message: "Write out your 1-3 letter text"
        },
        // text color
        {
            type: "input",
            name: "textColor",
            message: "What color text?"
        }
    ])

