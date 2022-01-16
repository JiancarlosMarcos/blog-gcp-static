const express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use(express.static('public'));