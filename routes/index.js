var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

/* GET home page. */
router.post('/insert', user.insert);
router.get('/', user.select);
router.get('/delete/:id', user.delete);
router.post('/update/:id', user.update);

router.post('/run/:id', user.run);
router.get('/running', user.running);

router.post('/pen/:id', user.pen);
router.get('/pending', user.pending);

router.post('/dec/:id', user.dec);
router.get('/decline', user.decline);

router.post('/com/:id', user.com);
router.get('/completed', user.completed);


module.exports = router;
