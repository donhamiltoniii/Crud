const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://jalil:NewWave13$@mongocluster-5xvta.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("db connected"))
