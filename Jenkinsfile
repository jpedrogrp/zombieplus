pipeline{
    agent {
        docker {image "jpedrogrp/node-wd"}
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
        }
    }
}