pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        sh '''npm i
npm run build
cp dist/todos-api/* /deploy'''
      }
    }

  }
}