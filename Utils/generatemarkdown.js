const generateREADME =({projectTitle, technologies, techReasons, motivation, reasonsforBuild, learningPoints, unique, usage, reportingIssues, features, contributions, license}) =>
`
# ${projectTitle}
## Table of Contents:

* [Technologies Used](#technologies-used)
* [Motivations](#motivations)
* [Purpose of Project](#purpose-of-project)
* [How are We Different?](#how-are-we-different?)
* [Usage of Application](#usage-of-application:)
* [Screenshots](#screenshots-of-application)
* [Reporting Issues](#reporting-issues:)
* [Features of Application](#features-of-application:)
* [How to Contribute](#how-to-contribute:)
* [License Information](#license-information:)
## Technologies Used:
${technologies}
## Reasons for These Technologies:
${techReasons}
## Motivations
${motivation}
## Purpose of Project
${reasonsforBuild}
## Learning Points:
${learningPoints}
## How are We different?
${unique}
## Usage of Application:
${usage}
## Reporting Issues:
${reportingIssues}
## Features of Application:
${features}
## How to Contribute:
${contributions}
## License Information
${license}
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