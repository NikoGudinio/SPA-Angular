const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectdb = async () => {

    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })

        console.log('BD Conectada')

    } catch (error) {
        console.log(error);
        process.exit(1) //Stop App
    }
}

module.exports = conectdb