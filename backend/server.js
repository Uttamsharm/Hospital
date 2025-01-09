// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const patientRoutes = require('./routes/patientRoutes');
// const pantryRoutes = require('./routes/pantryRoutes');
// const deliveryRoutes = require('./routes/deliveryRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to Database
// connectDB();

// // Routes
// app.use('/api', patientRoutes);
// app.use('/api', pantryRoutes);
// app.use('/api', deliveryRoutes);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//  app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });


const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const patientRoutes = require('./routes/patientRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const pantryTasksRoutes = require("./routes/pantryTasks");
const dietChartsRoutes = require("./routes/dietCharts");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Middleware to trim URLs
app.use((req, res, next) => {
    req.url = decodeURIComponent(req.url).replace(/[\n\r]/g, '').trim(); // Decode, remove newlines, and trim
    // console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });
  

// Routes
app.use('/api', patientRoutes);
app.use('/api', pantryRoutes);
app.use('/api', deliveryRoutes);
app.use("/api/pantry-tasks", pantryTasksRoutes);
app.use("/api/diet-charts", dietChartsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
