const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const promptUser = () => {
    return inquierer.prompt([
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
        message: 'What makes this project unique from others?'
        },
        {
        type:'input',
        name: 'usage',
        message: 'What the inteded usage for this project? Who is the target audience and user?'
        },
        {
        type:'input',
        name: 'reportingIssues',
        message: 'How should a user go about reporting an issue?'
        },
        {
        type:'list',
        name: 'features',
        message: 'Give a comma-separated list of features that can be found in your project:'
        },
        {
        type:'input',
        name: 'contributions',
        message: 'How should a user go about contributing to your project?'
        },
        {
        type:'input',
        name: 'license',
        message: 'How should a user go about reporting an issue?'
        },
    ])
};