
const gallery = require('./routes/gallery')
const vr = require('./routes/vr');
const api = require('./routes/api');


const express = require('express');
const app = express();

const PORT = process.env.PORT || 1234;

app.use(express.json());

app.use(express.static('public'));
app.use('/galleryvr', vr);
app.use('/api', api);
app.use('/gallery', gallery);

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
