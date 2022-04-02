const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db');
const cors = require('cors')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(`${__dirname}/client/build`))
app.use(cors())
app.use(express.json())
// app.use() middleware here ^ ///////////////////

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))