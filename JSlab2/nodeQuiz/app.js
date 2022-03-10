const express = require('express');
const app = express();

const signale = require('signale');

const PORT = process.env.PORT || 1337;

const read = require('./routes/read');
const pages = require('./routes/pages');

app.use(express.json());
app.use(express.static('public'));

app.use('/read', read);
app.use('/', pages);

app.listen(PORT, () => {
    signale.info('Server started and listening to port: ' + PORT);
});