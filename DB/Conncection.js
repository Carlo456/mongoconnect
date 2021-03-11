const mongoose = require('mongoose');

const URI ="mongodb+srv://root:root@clusterprueba.axd9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Base de datos conectada');
};

module.exports = connectDB;
