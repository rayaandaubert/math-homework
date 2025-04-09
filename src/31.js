let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

// Add your route handlers here

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
