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

    stage('Deploy to S3') {
      agent {
        docker {
          image 'amazon/aws-cli'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/deploy --interactive --entrypoint=""'
        }

      }
      steps {
        sh 'aws s3 cp /deploy s3://tod'
      }
    }

  }
}