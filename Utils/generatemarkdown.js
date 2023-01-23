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