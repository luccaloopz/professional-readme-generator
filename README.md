# **Professional README Generator**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Description**
The purpose of this project was to create a command-line application for developers to use that would generate a professional README.md file for them.

## **Technologies**

* ![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-orange)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## **Usage**
The following gif showcases the user answering the questions they are prompted within the command-line.



The following screenshot is the user's newly generated README.md file based on the questions they answered above.



Below is a snippet of the function that generated the README.md file. Notice the use of template literals which took user inputted data and dynamically appended them to the file.

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