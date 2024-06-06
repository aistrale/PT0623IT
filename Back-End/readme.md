Stack MERN -> MongoDB + ExpressJS + ReactJS + Node.JS

NodeJS -> https://nodejs.org/
ExpressJS -> https://expressjs.com/
Cors -> https://github.com/expressjs/cors
MongoDB -> https://www.mongodb.com/
MongoDB Compass -> https://www.mongodb.com/products/compass/
Mongoose -> https://mongoosejs.com/
DotEnv -> https://www.npmjs.com/package/dotenv
Multer -> https://expressjs.com/en/resources/middleware/multer.html
Cloudinary -> https://cloudinary.com/
Multer Storage Cloudinary -> https://www.npmjs.com/package/multer-storage-cloudinary
sendgrid -> https://sendgrid.com/
sendgrid -> https://www.twilio.com/docs/sendgrid/for-developers/sending-email/quickstart-nodejs
dbdiagram -> https://dbdiagram.io/
bcrypt -> https://www.npmjs.com/package/bcrypt
JWT -> https://jwt.io/
Json Web Token -> https://www.npmjs.com/package/jsonwebtoken
Passport -> https://www.passportjs.org/
GitIgnore -> https://www.npmjs.com/package/gitignore


-> node -v
-> npm -v
-> npm init -y
-> node nomefile.js
-> npm install express --save
-> npm install cors
-> npm install mongoose --save
-> npm install dotenv --save
-> npm install --save multer
-> npm install cloudinary
-> npm install multer-storage-cloudinary
-> npm install --save @sendgrid/mail
-> npm install bcrypt
-> npm install jsonwebtoken
-> npm install passport
-> npm install passport-google-oauth20
-> npm install -g gitignore  (Da installare solo una volta perche lo installo globalmente)





Set Google OAuth 2 Credentials

1 -> Google Developers Console (https://console.cloud.google.com/apis/dashboard)
2 -> OAuth consent screen (menu lato sx) -> External
    add app name, support email, app logo, app domain, email address
3 -> Add or Remove Scopes
    add profile and email
4 -> Test Users
    add test user email
5 -> Back to dashborad

6 -> Api library (menu lato sx) -> Search Google Peaple API -> Enable

7 -> Creadential (menu lato sx) -> Create Credentials Button
    Select Oauth client id
    Application type -> Web App
    Add name app
    Add redirect uri