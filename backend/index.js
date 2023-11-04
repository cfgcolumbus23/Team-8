const express = require('express');
const app = express();
const port = 3000;


const { db } = require('./db');

const { userRouter } = require('./user/user.router');

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await db.connect();
  console.log("connected");
});
