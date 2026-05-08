pipeline {
    agent any

    environment {
        IMAGE_NAME     = "demo-app"
        CONTAINER_NAME = "demo-app-container"
        PORT           = "3000"
    }

    stages {

        stage('Clone') {
            steps {
                echo '📥 Cloning from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/Ayushtawar13/first-pipeline.git'
            }
        }

        stage('Build') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo '🐳 Building Docker image...'
                sh '''
                    docker rmi -f ${IMAGE_NAME} || true
                    docker build -t ${IMAGE_NAME} .
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying container...'
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm   ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${PORT}:3000 \
                        --restart unless-stopped \
                        ${IMAGE_NAME}
                    echo "✅ Live at http://localhost:${PORT}"
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 SUCCESS! Visit http://localhost:3000'
        }
        failure {
            echo '💥 FAILED! Check stage logs above.'
        }
    }
}
