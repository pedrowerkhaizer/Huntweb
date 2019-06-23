//yarn add express
const express = require('express');
//yarn add mongoose
const mongoose = require('mongoose');
//yarn add require-dir
const requireDir = require('require-dir');
// yarn add cors -> permite acesso de
// outros dominios à sua API
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json())
app.use(cors())

//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true });
requireDir('./src/models');

//rots
app.use('/api', require('./src/routes'));

app.listen(3001);