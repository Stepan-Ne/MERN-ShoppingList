const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

// init express
const app = express();

// app.use(cors())
// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const passwordCluster = `EdQQkHrx0jAT2axk`;
const db = `mongodb+srv://steve:EdQQkHrx0jAT2axk@cluster1.ujtfq.mongodb.net/mern-shoppingList?retryWrites=true&w=majority`
mongoose.connect(db,  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

// Use routes
app.use('/api/items', items);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));