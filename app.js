var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var database = require('./src/database/index');

var app = express();

const dbUrl = 'mongodb://localhost:27017/cool'
var MongoClient = require('mongodb').MongoClient

MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function(err, client){
    if (err) {
        console.log('Connection Error', err)
    } else {
        console.log('链接数据库成功')
    }
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(database)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
