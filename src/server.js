const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mariadb = require('mariadb/callback');
const routes = require('./routes/index');
const { connection } = require('./config/database');
const path = require('path');

const app = express();
const port = process.env.PORT;
const fileDirectory = path.join(__dirname, '../client/dist/sports-betting-task');

app.use(express.static(fileDirectory));

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: fileDirectory}, (err) => {
        res.end();

        if(err) throw err;        
    });
});

app.use(express.json())
   .use(cors())
   .use(routes(connection));
   

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})