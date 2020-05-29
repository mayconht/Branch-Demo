pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
        git(url: 'https://github.ibm.com/RPATeam/Branch_Management_Sample', branch: 'developer')
      }
    }

  }
}