var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yyj', function (req, res, next) {
  const data = {
    name: 'boyuan',
    say: 'helloboy'
  }
  res.json(data)
})

module.exports = router;
