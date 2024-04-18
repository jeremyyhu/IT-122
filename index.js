'use strict'

import express from 'express';
import { Album } from './models/Album.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

// send content of 'home' view to browser
app.get('/', (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.render('home', { albums });
        })
        .catch(err => next(err));
});

app.get('/detail', (req, res, next) => {
    Album.findOne({ title: req.query.title }).lean()
            .then((album) => {
                res.render('detail', { album: album } );
            })
            .catch(err => next(err));
});

app.get('/delete', (req, res, next) => {
    Album.deleteOne({ title: req.query.title }).lean()
        .then((result) => {
            res.type('text/plain');
            let deleted = result['deletedCount'];
            if (deleted) {
                res.send(`Successfully deleted ${deleted} item(s).`);
            } else {
                res.send('Did not find item(s) to delete.');
            }
        })
        .catch(err => next(err));
});

app.use((req, res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started'); 
});