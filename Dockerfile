# 1. Node.js 이미지로부터 빌드 환경 설정
FROM node:18-alpine as build

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. package.json과 package-lock.json을 복사하고 npm을 사용해 종속성 설치
COPY package*.json ./

RUN npm install

# 4. 앱 소스 복사
COPY . .

# 5. 앱을 빌드 (React의 production 모드로 빌드)
RUN npm run build

# 6. 빌드된 파일들을 실행하기 위해 Node.js 서버 실행
CMD ["npm", "start"]

# 7. 앱을 노출할 포트 설정
ENV TZ Asia/Seoul
EXPOSE 3000