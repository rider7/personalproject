//REQUIRED
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');

//CONFIG
var config = require('./config');


//CONTROLLERS
var serverCtrl = require('../server/serverCtrl');
var UserCtrl = require('./controllers/userController.js');


//CONNECTIONS
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function(){
    console.log('Listening on port ' + port);
  });
});


//EXPRESS
var app = express();
var corsOptions = {
  origins: 'http://localhost:3000'
}

//SERVICES
var passport = require('./services/passport');

//POLICIES
var isAuthed = function(req, res, next){
  if(!req.isAuthenticated())
  return res.status(401).send();
  return next();
};

//PASSPORT ENDPOINTS
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));

//USER AUTH ENDPOINTS
app.post('/register', UserCtrl.register);
app.get('/user', UserCtrl.read);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/user/:_id', isAuthed, UserCtrl.update);

//USE
 app.use(bodyParser.json());
 app.use(cors(corsOptions));

 //PUBLIC
 app.use(express.static(__dirname + '/../public'));

//ENDPOINTS
//PRODUCTS
 app.post('/api/products', serverCtrl.createProduct);
 app.get('/api/products', serverCtrl.getProducts);
 app.get('/api/products/:id', serverCtrl.getProductsID);
 app.put('/api/products/:id', serverCtrl.updateProductsID);
 app.delete('/api/products/:id', serverCtrl.deleteProductsID);

//USERS
 app.post('/api/user/', serverCtrl.createUser);
 app.get('/api/user/:id', serverCtrl.getUserID);

//ORDER
 app.post('/api/order/:user_id', serverCtrl.createOrderID);
 app.get('/api/order/', serverCtrl.getOrder);

//CART
 app.post('/api/cart/:user_id', serverCtrl.createCartID);
 app.put('/api/cart/:user_id', serverCtrl.updateCartID);
