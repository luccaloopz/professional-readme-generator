# **Professional README Generator**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Description**
The purpose of this project was to create a command-line application for developers to use that would generate a professional README.md file for them. 

## **Technologies**

* ![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-orange)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## **Installation**
First, you'll want to clone down this repository onto your local machine. You can do this by copying the code within the green code button and typing out `git clone *insert code here*` within your command terminal.

Next, you'll want to type the following in the command line. This installs the dependencies that will be used. 
```
npm install
```

Lastly, run Node to start the application. You can do this by typing the following within the command line.
```
node index.js
```

## **Usage**
The following is a link to a video walkthrough of the application: 
[![Video Walkthrough](./assets/Untitled_%20Apr%2021%2C%202022%208_21%20PM.webm)](https://drive.google.com/file/d/1DcB6lWWMuklGMSwzCWdvvUA8fc-RSdWZ/view "Video Walkthrough")

Below is a snippet of the function that generated the README file. Notice the use of template literals which take the user-inputted data and dynamically appends them to the file.

```javascript
function generateMarkdown(data) {
  return `# **${data.title}**

${renderLicenseLink(data.license)}

## **Description**
${data.description}
## **Table Of Contents**

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## **Installation**
${data.installation}

## **Usage**
${data.usage}

## **Contributing**
${data.contribution}

## **Tests**
${data.test}

## **Questions**
My GitHub profile: https://github.com/${data.username}

If you have any additional questions or concerns and wish to reach out to me, please email me at ${data.email} with the name of this GitHub repo, and your question.

${renderLicenseSection(data.license)}`;
};
```

## **License**
The following application is covered under the MIT License.