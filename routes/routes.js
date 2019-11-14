let express = require('express');
let router = express.Router();
let userRouter = require('../server/apis/register/route');
let userLoginRouter = require('../server/apis/login/route');
let middleWare = require('../middleware')

router.use('/user', userRouter);
router.use('/userLogin', userLoginRouter);
router.use('/post', middleWare);


module.exports = router;