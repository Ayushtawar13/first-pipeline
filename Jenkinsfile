pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Ayushtawar13/first-pipeline/'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 demo-app'
            }
        }
    }
}
