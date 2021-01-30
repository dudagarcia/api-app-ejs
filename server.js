var express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/users');

app.use(express.json());

app.use(routes);

app.listen(port);