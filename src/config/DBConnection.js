import mongoose from 'mongoose';
export function DBConnection() {
  // mongo connection
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
    .then(done => console.log("> Connected to mongoDB"))
    .catch(err => console.log(err));
}