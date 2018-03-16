var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const util = require('util')

const logger = require('./util/logger');
const apiRouter = require('./router/apiRouter');

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

var app = express();

app.use(morgan('short', { stream: logger.customStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressJwt({
  secret: 'secret',
  // credentialsRequired: true
}).unless({ path: ['/api/v1/jwt', '/jwt/express-jwt'] }))

app.post('/api/v1/jwt', function (req, res, next) {
  let name = req.body.name;
  let password = req.body.password;

  if (name === 'Edwin' && password === 'Good Luck') {
    let payload = { name: 'Edwin' };
    let token = jwt.sign(payload, 'secret');
    res.send({ type: true, token: token })
  } else {
    res.status(401);
    res.send({ type: false, message: 'passwords did not match' })
  }
})

app.use('/api/v1', apiRouter)

app.get('/jwt/express-jwt', function (req, res, next) {
  if (req.user) {
    logger.debug(req.user)
    return res.json('success')
  } else {
    return res.json('false')
  }
})

app.use(function (req, res, next) {
  res.status(404);
  res.json({
    type: false,
    message: 'Url Not Found'
  })
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      type: false,
      message: err.message || 'invalid token...'
    });
  }
  logger.error(err.stack || err);
  if (err.status == 400) {
    res.status(400);
    res.json({
      type: false,
      message: err.message || err
    });
  } else {
    res.status(500);
    res.json({
      type: false,
      message: err.message || err
    })
  }
});

module.exports = app;
