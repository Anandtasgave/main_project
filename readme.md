//1

npm init

git add .
git commit -m "add initial files for backend"
git branch -M main
git remote add origin https://github.com/Anandtasgave/main_project.git
git push -u origin main

src -> app.js index.js constants.js

npm i -D nodemon

git status
git add .
git commit -m "Setup of project files"

npm i -D prettier

create and update .prettierrc




//2
mongo cluster creation and setup

npm i express mongoose dotenv

update /src/index.js

create and update /src/db/index.js

update /src/index.js

update dev script in package.json




//3
npm i cookie-parser cors

update /src/app.js

create and update /src/utils/asyncHandler

create and update /src/utils/ApiError

create and update /src/utils/ApiResponse

//4

create and update /src/models/user

create and update /src/models/video

npm i mongoose-aggregate-paginate-v2

npm i bcrypt jsonwebtoken

update .env  
    ACCESS_TOKEN_SECRET=yt-project
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=yt-backend
    REFRESH_TOKEN_EXPIRY=10d

update /src/models/user