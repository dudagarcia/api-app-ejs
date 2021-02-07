var dotenv = require('dotenv');

var express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const section = require('./routes/section');
const availability = require('./routes/availability');
const users = require('./routes/users');
const tasks = require('./routes/tasks');
const projects = require('./routes/projects');

app.use(express.json());

app.use(section);
app.use(availability);
app.use(users);
app.use(tasks);
app.use(projects);

dotenv.config();

app.listen(port);