const express = require('express');
const app = express();
const port = 3000;


const { db } = require('./db');


const { lessonRouter } = require('./lesson/lesson.router');



// app.get('/', async (req, res) => {
//   res.send('this is the backend for the new app');

// });


app.use(express.json());

app.use('/lesson', lessonRouter);


app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
  await db.connect();
  // await setUpTables();

  console.log("connected");
});