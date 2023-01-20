const fs = require('fs');

const inquirer = require("inquirer");
const { default: Choices } = require('inquirer/lib/objects/choices');
const { title } = require('process');
const { writeFile } = require("fs").promises;
let screenshotArray = []
const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of the project?",
        },
        {
        type:'input',
        name: 'technologies',
        message: 'What were the technologies that were used to make this project?'
        },
        {
        type:'input',
        name: 'techReasons',
        message: 'Why did you use those specific technologies?'
        },
        {
        type:'input',
        name: 'motivation',
        message: 'What was the driving motivation to make this project possible?'
        },
        {
        type:'input',
        name: 'reasonsforBuild',
        message: 'What problem or need did this project help solve?'
        },
        {
        type:'input',
        name: 'learningPoints',
        message: 'What were the learning ponits within this project (can be either personally or professionally)?'
        },
        {
        type:'input',
        name: 'unique',
        message: 'What makes this project unique from others?() Ex:"This project is unique because ...")'
        },
        {
        type:'input',
        name: 'usage',
        message: 'What the inteded usage for this project? Who is the target audience and user? (Ex: "This project is intended to be used by ... for ... reason." '
        },
        {
        type:'input',
        name: 'reportingIssues',
        message: 'How should a user go about reporting an issue?'
        },
        {
        type:'input',
        name: 'features',
        message: 'Give a comma-separated list of features that can be found in your project:'
        },
        {
        type:'input',
        name: 'contributions',
        message: 'How should a user go about contributing to your project?'
        },
        {
        type:'list',
        name: 'license',
        message: 'What liscence is this project under?',
        choices:['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0', 'MIT License','Boost Software License 1.0','The Unlicense']
        },
    ])
};
const generateREADME =({projectTitle, technologies, techReasons, motivation, reasonsforBuild, learningPoints, unique, usage, reportingIssues, features, contributions, license}) =>
`
# ${projectTitle}
## Table of Contents:
[Technologies](#Technologies-Used:)
[Motivations](#Motivations)
[Purpose of Project](#Purpose-of-Project)
[How are We Different?](#How-are-We-Different?)
[Usage of Application](#Usage-of-Application:)
[Screenshots](#Screenshots-of-Application)
[Reporting Issues](#Reporting-Issues:)
[Features of Application](#Features-of-Application:)
[How to Contribute](#How-to-Contribute:)
[License Information](#License-Information:)
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
const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
  };
  
  init();