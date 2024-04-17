const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`I AM RUNNING on PORT ${PORT}`)
})