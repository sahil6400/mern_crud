require('dotenv').config();
const express = require('express');
const mongoDB = require('./config/db.js');
const app = express();
const PORT = 5000;
app.use(express.json());

const empRoute = require('./routes/empRoutes.js');
const depRoute = require('./routes/depRoute.js');

app.get('/', (req, res) => { 
    res.json({
        message: "Backend is running"
    });
});

app.use('/api/employee', empRoute);
app.use('/api/department',depRoute);

const start_session = async () => {
    await mongoDB();

    app.listen(PORT, () => {
        console.log(`Mern is running on port ${PORT}`);
    });
}

start_session();