const express = require('express');
const path  = require('path')
const dotenv  = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/reactapp/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'reactapp', 'build', 'index.html'))
  );
}


app.listen(PORT, () => {
  console.log(`Server is runnig on PORT ${PORT}`);
});
module.exports = app;
