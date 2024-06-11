class SVG {
    constructor() {
        // sets empty text string for user input
        this.text = "";
        // set empty shape string for user input
        this.shape = "";
    }

    // renders an svg string (info taken from circle.svg)
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(textValue, textColor) {
        if (textValue.length > 3) {
            throw new Error("3 letters max");
        }
    // info from circle.svg
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textValue}</text>`
    }
    // sets the shape
    setShape(shapeValue) {
        this.shape = shapeValue.render();
    }
};

module.exports = SVG;