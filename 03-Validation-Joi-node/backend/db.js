const mongoose = require("mongoose");
require("dotenv/config");

return mongoose.connect(
  'mongodb://127.0.0.1:27017/project',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);
