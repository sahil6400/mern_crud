require('dotenv').config();
const express = require('express');
const mongoDB = require('./config/db.js');
const app = express();
const PORT = 5000;
app.use(express.json());

const empRoute = require('./routes/empRoutes.js');
const depRoute = require('./routes/depRoute.js');
const userRoute = require('./routes/userRoute.js');
const path = require('path');

app.get('/', (req, res) => { 
    res.json({
        message: "Backend is running"
    });
}); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/employee', empRoute);
app.use('/api/department',depRoute);
app.use('/api/user',userRoute);

const start_session = async () => {
    await mongoDB();

    app.listen(PORT, () => {
        console.log(`Mern is running on port ${PORT}`);
    });
}

start_session();