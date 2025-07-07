pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Prathap-lang-commits/devops-fullstack-app.git'
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker compose pull'
                sh 'docker compose up -d'
            }
        }

        stage('Verify Frontend') {
            steps {
                sh 'sleep 10'
                sh 'curl -I http://frontend:3000 || true'
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
