pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('Docker-hub') // Jenkins에 저장된 Docker Hub 자격증명
        IMAGE_NAME = "taehopark/mynameis-frontend" 
        REPO = "https://github.com/sunbongE/MyNameIsFE"
        TZ = "Asia/Seoul"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Print Current Time') {
            steps {
                script {
                    sh "date" // 현재 시간을 출력 (서울 시간대로 설정됨)
                }
            }
        }

        stage("Build Docker IMG") {
            steps {
                script {
                    sh """
                    ls -al
                    docker build -t ${IMAGE_NAME} .
                    """
                    
                }
            }
        }
        
        stage("Push to Docker Hub"){
            steps{
                sh """
                echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin
                docker push ${IMAGE_NAME}
                """
            }
        }

        stage("Stop Previous Container"){
            steps{
                def containerName = "mynameisFE"
                sh """
                if [ \$(docker ps -q -f name=${containerName}) ]; then
                    docker stop ${containerName}
                    docker rm ${containerName}
                fi
                """
            }
        }

        stage("Pull & Run New Container"){

            steps{
                script{
                    def containerName = "mynameisFE"

                    sh """
                    docker pull ${IMAGE_NAME}
                    docker run -d --network jenkins-network -p 3000:3000 --name ${containerName} ${IMAGE_NAME}
                    """
                }
            }
        }
    }

    post{
        always{
            echo "해치웠나?"
        }
    }


        
}
