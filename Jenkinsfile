pipeline {
    agent any

    environment {
        COMPOSE_DOCKER_CLI_BUILD = 1
        DOCKER_BUILDKIT = 1
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Prathap-lang-commits/devops-fullstack-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify Frontend') {
            steps {
                echo 'Waiting for the frontend to come up...'
                sh 'sleep 20'
                sh 'curl -I http://localhost:3000 || true'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up containers...'
            sh 'docker compose down'
        }
    }
}
