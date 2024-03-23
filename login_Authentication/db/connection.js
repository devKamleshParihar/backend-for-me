const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('db connected succesfully'))
.catch((err)=>console.log('Error found in database ',err))