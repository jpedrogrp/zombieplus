pipeline{
    agent any
    stages {
        stage('Build'){
            sh "npm i"
        }
        stage("Test"){
            sh "npm test"
        }
    }
}