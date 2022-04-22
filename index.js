// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let generateMD = require('./utils/generateMarkdown');
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
        name: 'usage'
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
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "ISC License"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        };
        console.log('File saved');
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        return generateMD(answers);
    }).then(data => {
        let fileName = `READMENEW.md`
        return writeToFile(fileName, data);
    }).catch(err => {
        console.log(err)
    })
};

// Function call to initialize app
init();
