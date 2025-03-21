let express = require('express');
let app = express();

app.get('/hello', (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000);
