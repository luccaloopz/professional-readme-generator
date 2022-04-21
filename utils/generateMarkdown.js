// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (data.license === "MIT License") {
  //   return `![GitHub](https://img.shields.io/github/license/${data.username}/${})`
  // }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## **Description**
  ${data.description}
  ## **Table Of Contents**

  * [Badges](#badges)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## **Badges**
  

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

  If you have any additional questions or concerns and wish to reach out to me, please email me at the following address with the name of this GitHub repo, and your question:${data.email}

  ## **License**
  This application is covered under the ${data.license}`;
};

module.exports = generateMarkdown;
