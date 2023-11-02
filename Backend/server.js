const express = require('express');
const cors = require('cors');
const cloudConnect = require('./config/cloudConnect');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(routes);

// console.log(process.env.PORT);
const port = process.env.PORT || 4000;
app.listen(port ,() =>{
    console.log("App listening on port : " + port);
});

//using express json so commented
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const {addMessage} = require('./controllers/addMessage');
app.post('/addMessage',addMessage);

const {getMessages} = require('./controllers/getMessages');
app.get('/getMessages',getMessages);

const dbConnect = require('./config/database');
dbConnect();
