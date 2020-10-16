#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')

program
.command('create <name>')
.description('创建Vue脚手架')
.action((name) => {
    const createVue = [
        {
            type : 'input' ,
            name : 'user' ,
            message : '请输入用户名' ,
            validate(value){
                if(value.length<3){
                    return '用户名字段不得少于3个字符'
                }else{
                    return true
                }
            }
        },
        {
            type : 'password' ,
            name : 'pwd' ,
            message : '请输入您的密码' ,
            validate(value){
                if(value = '123456'){
                    return true
                }else{
                    return '密码输入错误,请确认后重新登录'
                }
            }
        },
        {
            type : 'list' ,
            name : 'preset' ,
            message : 'Please pick a preset: (Use arrow keys)' ,
            choices : [
                'Default ([Vue 2] babel, eslint)' ,
                'Default (Vue 3 Preview) ([Vue 3] babel, eslint)' ,
                'Manually select features'
            ]
        },
        {
            type : 'checkbox' ,
            name : 'project' ,
            message : ' Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)' ,
            choices : [
                'Choose Vue version' ,
                'Babel' ,
                'TypeScript' ,
                'Progressive Web App (PWA) Support' ,
                'Router' ,
                'Vuex' ,
                'CSS Pre-processors' ,
                'Linter / Formatter' ,
                'Unit Testing' ,
                'E2E Testing'
            ],
            default : ['Choose Vue version' , 'Babel' , 'Linter / Formatter'] ,
            when(value){
                return value.type === 'Manually select features'
            }
        },
        {
            type : 'confirm' ,
            name : 'router' ,
            message : 'Use history mode for router? (Requires proper server setup for index fallback in production)' ,
            default : []
        },
        {
            type : 'list' ,
            name : 'style' ,
            message : ' Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)' ,
            choices : [
                'Sass/SCSS (with dart-sass)' ,
                'Sass/SCSS (with node-sass)' ,
                'Less' ,
                'Stylus'
            ]
        },
        {
            type : 'list' ,
            name : 'config' ,
            message : ' Pick a linter / formatter config: (Use arrow keys)' ,
            choices : [
                'ESLint with error prevention only' ,
                'ESLint + Airbnb config' ,
                'ESLint + Standard config' ,
                'ESLint + Prettier' 
            ]
        },
        {
            type : 'checkbox' ,
            name : 'features' ,
            message : 'Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)' ,
            choices : [
                'Lint on save' ,
                'Lint and fix on commit'
            ],
            default : ['Lint on save']
        },
        {
            type : 'list' ,
            name : 'des' ,
            message : 'Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)' ,
            choices : [
                'In dedicated config files' ,
                'In package.json'
            ]
        }
    ]
    inquirer.prompt(createVue).then(answers => {
        console.log(answers)
    })
})

program.parse(process.argv)