pipeline{
    agent {
        docker {
            image "jpedrogrp/node-wd"
            args "--network=skynet"
        }
    }
    stages {
        stage('Build'){
            steps{
               sh "npm i"  
            }
        }
        stage("Test"){
            steps{
                sh "npm run test:ci"
                junit testResults: "tests_output/**/*.xml"
            }
        }
    }
    
}