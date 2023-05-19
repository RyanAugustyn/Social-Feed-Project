pipeline {
    agent any

    environment{
        def nodejsTool = tool name: 'node-20-tool', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        def dockerTool = tool name: 'docker-latest-tool', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
        PATH = "${nodejsTool}/bin:${dockerTool}/bin:${env.PATH}"
    }

    stages {

        stage('Install Dependencies'){
            steps {

                sh 'npm install'
            }
        }

        stage('Create Optimized React Build'){
            steps {

                sh 'npm run-script build'
            }
        }

        stage('Build Docker Image'){
            steps { 
                
                sh """
                    docker build  -t ryanaugustyn/social-feed-jenkins-docker:$BUILD_NUMBER .
                """
            }
        }

        stage('Push Docker Image'){
            steps {
                withCredentials([usernamePassword(credentialsId: 'personal-dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                }
                sh "docker push ryanaugustyn/social-feed-jenkins-docker:$BUILD_NUMBER"
            }
        }

        stage('Deploy New Image to AWS EC2'){
            steps{
                sh 'echo "Deploying to EC2..."'
                //SSH into our remote server using ssh agent plugin
                //StrictHostKey auto adds new host keys, suppresses prompt to accept fingerprints
                //Shut down the current running image
                //Pull the new image that was just pushed
                //Launch thtat new image running on our remote server


                sshagent(['social-feed-linux-kp-ssh-credentials']){
                    sh """ 
                        SSH_COMMAND="ssh -o StrictHostKeyChecking=no ubuntu@54.211.106.154"
                        \$SSH_COMMAND "docker stop hosted-react-app && docker rm hosted-react-app"
                        \$SSH_COMMAND "docker pull ryanaugustyn/social-feed-jenkins-docker:$BUILD_NUMBER"
                        \$SSH_COMMAND "docker run -d -p 80:80 --name hosted-react-app ryanaugustyn/social-feed-jenkins-docker:$BUILD_NUMBER"

                    """
                }
                
                
            }
        }
    }
}