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
            }
            post {
                // aborted
                // failure
                // success
                // changed 
                always{
                    junit testDataPublishers:[[$class: "AttachmentPublisher"]], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }  
}