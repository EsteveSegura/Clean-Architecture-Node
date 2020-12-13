import userDb from './user.db'
import mongoose from 'mongoose'
import userModel from './models/user.model'

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/testv', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("OK"))
    .catch((err) => console.log(err))


const makeUserDb = userDb({userModel})
export default makeUserDb