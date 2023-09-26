require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

require('./config/database').connect();
const productRoute = require('./modules/product/router');
const cartRoute = require('./modules/cart/router');
const authRoute = require('./modules/users/router');
const wishlistRoute = require('./modules/wishlist/router');

app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/auth', authRoute);
app.use('/api/wishlist', wishlistRoute);

app.get('/api', (res) => {
  res.send('Api Working!');
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('server running on port ' + PORT);
});
