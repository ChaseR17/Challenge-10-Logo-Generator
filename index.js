const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

const generateSVG = () => {
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

  // show user response
  .then((res) => {
    console.log(res);

    let svgShape;

    //if the response is circle import circle parameter from shapes.js
    if (res.shape === "Circle") {
        svgShape = new Circle();
    }
    // if the response is triangle import triangle parameter from shapes.js
    if (res.shape === "Triangle") {
        svgShape = new Triangle();
    }
    // if the response is square import square parameter from shapes.js
    if (res.shape === "Square") {
        svgShape = new Square();
    }
    // allow user to pick color
    svgShape.setColor(res.shapeColor)

    // Create a function to generates svg file and to save it in the examples folder
    const svg = new SVG();
    svg.setText(res.text, res.textColor);
    svg.setShape(svgShape);
    return writeFile("./examples/logo.svg", svg.render());
}).then(() => {
    console.log("Generated logo.svg");
})
};

// Function call to generates SVG file
generateSVG();
