const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter SVG text:",
      validate: (text) =>
        text.length <= 3 || "text must be less than 3 characters",
      name: "text",
    },
    {
      type: "list",
      message: "Enter the color of the text",
      name: "textColor",
      choices: ["red", "blue", "green", "yellow", "white"],
    },
    {
      type: "list",
      message: "Enter the Shape",
      name: "shape",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "list",
      message: "Enter the shape color",
      name: "shapeColor",
      choices: ["red", "blue", "green", "yellow"],
    },
  ])
  .then((response) => {
    if (response.shape === "circle") {
      const circle = new Circle();
      circle.setColor(response.textColor);
      circle.setText(response.text);
      circle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", circle.render(), (err) => {
        console.log("Generated Logo.svg");
      });
    } else if (response.shape === "square") {
      const square = new Square();
      square.setColor(response.textColor);
      square.setText(response.text);
      square.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/logo.svg", square.render(), (err) => {
        console.log("Generated Logo.svg");
      });
    } else if (response.shape === "triangle") {
      const triangle = new Triangle();
      triangle.setColor(response.textColor);
      triangle.setText(response.text);
      triangle.setShapeColor(response.shapeColor);
      fs.writeFile("./examples/Logo.svg", triangle.render(), (err) => {
        console.log("Generated Logo.svg");
      });
    }
  });
