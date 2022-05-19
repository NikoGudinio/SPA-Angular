const express = require('express');
const conectdb = require('./config/db');
const cors = require('cors');

// Create Server
const app = express();

// Connect DB
conectdb();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('el server está funcionando bien');
})
