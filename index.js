//gives ability to write file later down the logic in this JS file
const fs = require('fs');
// the actual markdown for the README structure with template literals
const generateREADME = require('./Utils/generateMarkdown')

const inquirer = require("inquirer");
// allows promises  later on in the logic of the file
const { writeFile } = require("fs").promises;
//inquirer prompts for the UserInput
const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of the project?",
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please enter a Project Title or a Placeholder name to continue.')
                }
            }
            },
        {
        type:'input',
        name: 'technologies',
        message: 'What were the technologies that were used to make this project?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please enter a the technologies used to continue.')
                }
            },
            },
        {
        type:'input',
        name: 'techReasons',
        message: 'Why did you use those specific technologies?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please describe the reasons for using these technologies.')
                }
            }
        },
        {
        type:'input',
        name: 'motivation',
        message: 'What was the driving motivation to make this project possible?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please enter some motivations that led you to work on this project.')
                }
            }
        },
        {
        type:'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please enter your Github username.')
                }
            }
        },
        {
        type:'input',
        name: 'learningPoints',
        message: 'What were the learning ponits within this project (can be either personally or professionally)?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please enter some things that you and/or your team learned throughout the building of this application.')
                }
            }
        },
        {
        type:'input',
        name: 'unique',
        message: 'What makes this project unique from others? Who are the authors of this project? (Ex:"The authors of this project are:...This project is unique because ...", you can also list contributors and what your team added to the application)',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please tell us why your project is unique & what are your names?!')
                }
            }
        },
        {
        type:'input',
        name: 'usage',
        message: 'What the inteded usage for this project? Who is the target audience and user? (Ex: "This project is intended to be used by ... for ... reason." ',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please tell us who this application is intended for.')
                }
            }
        },
        {
        type:'input',
        name: 'reportingIssues',
        message: 'How should a user go about reporting an issue?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please tell the audience how to reach out for help on any issues. AKA provide a contact number, email, or list out a process to report problems.')
                }
            }
        },
        {
        type:'input',
        name: 'features',
        message: 'Give a comma-separated list of features that can be found in your project:',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('Please give us some deets on your applications features.')
                }
            }
        },
        {
        type:'input',
        name: 'contributions',
        message: 'How should a user go about contributing to your project?',
        validate: (value) => {
            if (value) {
                return true;
                } else{
                    console.log('A default fork and pull workflow will be inserted.')
                    return (forkandPull)
                }
            }
        },
        {
        type:'list',
        name: 'license',
        message: 'What license is this project under?',
        choices:['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0', 'MIT License','Boost Software License 1.0','The Unlicense'],        
        },
    ])
};

const init = () => {
    promptUser()
        .then((userInput) =>{
            console.log(userInput)
            writeFile('./Utils/README.md', generateREADME(userInput))
            })
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
  };
  
  init();