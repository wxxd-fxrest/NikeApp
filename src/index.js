const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./router/productRoutes.js');
const orderRoutes = require('./router/orderRoutes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
	res.send("<h2>Hello wood!</h2>");
});

app.listen(PORT, () => {
    console.log('API is listening on port ', PORT);
});