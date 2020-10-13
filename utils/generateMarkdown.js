// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  1. [Installation](##Installation)
  2. [Usage](##Usage)
  3. [License](##License)
  4. [Contributing](##Contributing)
  5. [Tests](##Tests)
  6. [Questions](##Questions)

  ##Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License 
  This project is licensed under the ${data.license} license.

  ##Contributing
  ${data.contributing}

  ##Tests
  To run tests, run the following command:
  ${data.tests}

  ##Questions
  If you have any questions about this repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
