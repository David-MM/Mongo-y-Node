const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is Connected'))
    .catch(err => console.log(err));