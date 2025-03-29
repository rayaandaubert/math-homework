let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
