#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  {
    message: "Kindly select one of the operator to perform action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
]);

if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Kindly select valid Operator");
}


