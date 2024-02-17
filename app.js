const config = require('./config/config')
const express = require('express');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swaggerConfig')
const logger = require('morgan');

const flightRoutes = require('./routes/flight/index');

const app = express();

app.use(logger('dev'));

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/api/flights', flightRoutes);

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);
// use swagger-Ui-express for your app documentation endpoint
app.use('/swagger-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Test api
app.get('/', (req, res) => {
	res.status(200).json({ message: "Server is up and running..." })
})

module.exports = app;
