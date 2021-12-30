const dbUrl = 'mongodb://localhost:27017/cool'
var MongoClient = require('mongodb').MongoClient

MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function(err, client){
    if (err) {
        console.log('Connection Error', err)
    } else {
        console.log('链接数据222库成功')
    }
})

module.exports = MongoClient;
