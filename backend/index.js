const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const { db } = require('./db');
const {topicRouter} = require('./topic/topic.router');

const { userRouter } = require('./user/user.router');
const { lessonRouter } = require('./lesson/lesson.router');
const { progressRouter } = require('./progress/progress.router');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/lesson', lessonRouter);
app.use('/progress', progressRouter);
app.use('/topic', topicRouter);

// app.use('/login', userRouter);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await db.connect();
  console.log("connected");
});
