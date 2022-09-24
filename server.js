const fs = require ('fs');
const path = require ('path');
const express = require ('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes/script');
const htmlRoutes = require ('./routes/htmlRoutes/routes');
const PORT = process.env.PORT||3001;

const notes = require('./Develop/db/db.json');

//adds layer to the middleware stack

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//apiRoutes
app.use ('/api', apiRoutes);
app.use ('./', htmlRoutes);

app.listen(PORT, () => {
    console.log (`API server on port ${PORT}!`);
});