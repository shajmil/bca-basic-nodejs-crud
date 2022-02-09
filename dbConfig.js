const mongoose = require('mongoose');

const createConnection = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb+srv://fredyd:typedef123@cluster0.uuh2k.mongodb.net/productDb?retryWrites=true&w=majority'
    );

    console.log(`Mongodb connected`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = createConnection;
