const express = require('express');
const app = express();
const port = 3000;


const { db } = require('./db');
const { progressRouter } = require('./progress/progress.router');

app.use(express.json())

app.use("/progress", progressRouter);

app.get('/', async (req, res) => {
  res.send('this is the backend for the new app');

});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
  await db.connect();

  console.log("connected");
});