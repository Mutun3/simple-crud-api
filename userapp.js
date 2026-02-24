const express = require('express');
const connectDb = require('./config/db');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

connectDb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log('Server running on port ${PORT}')
);

