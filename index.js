// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want the readme title to be?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description for your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter the usage information for your project.',
        name: 'usage information'
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines for your project.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter the test instructions for your project.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Which licese would you like to choose for your application?',
        choices: ["MIT License", "Apache License 2.0", "GNU GPLv3", "ISC License"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'username'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
