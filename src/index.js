require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

require('./config/database').connect();
const productRoute = require('./modules/product/router');
const authRoute = require('./modules/users/router');
const wishlistRoute = require('./modules/wishlist/router');
const paymentRoute = require('./modules/payment/router');
const orderRoute = require('./modules/order/router');

app.use('/api/products', productRoute);
app.use('/api/auth', authRoute);
app.use('/api/wishlist', wishlistRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/order', orderRoute);

app.get('/api', (req, res) => {
  res.send('Api Working!');
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('server running on port ' + PORT);
});
