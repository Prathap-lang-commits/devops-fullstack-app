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
                sh 'curl -I http://localhost:3000 || true'
            }
        }
    }
    post {
        always {
            echo 'Containers are up. Debug within 60 seconds...'
            sh 'sleep 60'
            sh 'docker compose down'
        }
    }
}
