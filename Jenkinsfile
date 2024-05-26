pipeline {
    agent any
    environment {
        WEATHER_API_KEY = credentials('weather_key') 
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Jacbski/weather_app.git'
            }
        }
        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }
        stage('Run Backend Unit Tests') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
        stage('Run Frontend Unit Tests') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
        stage('Start Backend') {
            steps {
                dir('backend') {
                    sh 'nohup node server.js &'
                }
            }
        }
        stage('Verify Deployment') {
            steps {
                script {
                    def response = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/weather?city=Gdansk', returnStdout: true).trim()
                    if (response != '200') {
                        error "Deployment verification failed: HTTP status code ${response}"
                    } else {
                        echo "Deployment verification succeeded: HTTP status code ${response}"
                    }
                }
            }
        }
        stage('Run E2E Tests') {
            steps {
                dir('frontend') {
                    sh 'npx cypress run'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            junit 'target/test-*.xml'
        }
    }
}
