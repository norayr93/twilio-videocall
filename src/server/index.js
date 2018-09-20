const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const distPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(distPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
