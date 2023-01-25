const generateREADME = (userInput) =>
`
# ${userInput.projectTitle}

#### Table of Contents:

* [Technologies Used](#technologies-used)
* [Motivations](#motivations)
* [Github](#github)
* [Who Are We?](#who-are-we)
* [Usage of Application](#usage-of-application)
* [Screenshots](#screenshots-of-application)
* [Reporting Issues](#reporting-issues)
* [Features of Application](#features-of-application)
* [How to Contribute](#how-to-contribute)
* [License Information](#license-information)

## Technologies Used:
${userInput.technologies}
## Reasons for These Technologies:
${userInput.techReasons}
## Motivations
${userInput.motivation}
## Github
![Github:${userInput.github}](https://github.com/${userInput.github}/)](https://github.com/${userInput.github}/)
## Learning Points:
${userInput.learningPoints}
## Who Are We?
${userInput.unique}
## Usage of Application:
${userInput.sage}
## Reporting Issues:
${userInput.reportingIssues}
## Features of Application:
${userInput.features}
## How to Contribute:
${userInput.contributions}
## License Information
${renderLicenseInfo(userInput.license)}
`

const forkandPull = `
Follow the "fork-and-pull" Git workflow.
<br/>
1) Fork the repo on GitHub
<br/>
2) Clone the project to your own machine
<br/>
3) Commit changes to your own branch
<br/>
4) Push your work back up to your fork
<br/>
5) Submit a Pull request so that we can review your changes
<br/>
NOTE: Be sure to merge the latest from "upstream" before making a pull request!`
license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//returns badge image, and on click provides the license link

function renderLicenseInfo(license) {
    console.log("license",license)
  switch (license) {
    case "GNU AGPLv3":
      return (license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
    case "GNU GPLv3":
      return (license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");

    case "GNU LGPLv3":
      return (license =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");

    case "Mozilla Public License 2.0":
      return (license =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");

    case "Apache License 2.0":
      return (license =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");

    case "MIT License":
      return (license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");

    case "Boost Software License 1.0":
      return (license =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");

    case "The Unlicense":
      return (license =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
    case "Other":
      return (license =
        "[![License: TYPE LICENSE NAME HERE](PROVIDE BADGE IMAGE SRC LINK HERE)](PROVIDE BADGE LINK HERE)");
  }
};

module.exports = generateREADME;