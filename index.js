const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'bio')));

app.listen(5000, () => console.log('Server started on port 5000'))