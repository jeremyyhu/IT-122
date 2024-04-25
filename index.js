'use strict'

import cors from 'cors';
import express from 'express';
import { Album } from './models/Album.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('public')); // set location for static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Used to parse JSON bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.render('home', { albums });
        }).catch(err => next(err));
});

app.get('/detail', (req, res, next) => {
    Album.findOne({ title: req.query.title }).lean()
            .then((album) => {
                res.render('detail', { album: album } );
            }).catch(err => next(err));
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
        }).catch(err => next(err));
});

// API routes
app.get('/api/albums', (req, res) => {
    Album.find({}).lean()
        .then(albums => {
            res.json(albums);
        }).catch(err => {
            res.status(500).send('Database Error occurred');
        });
});

app.get('/api/albums/:title', (req, res) => {
    Album.findOne({ title: req.params.title })
        .then(album => {
            if (!album) {
                res.status(404).send('404 - Not found');
            } else {
                res.json(album);
            }
        }).catch(err => {
            res.status(500).send('Database Error occured');
        });
});

app.post('/api/add', (req, res) => {
    Album.updateOne({ _id: req.body._id }, req.body, { upsert: true })
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).send('Database Error occured');
        });
});

app.get('/api/delete/:title', (req, res) => {
    Album.deleteOne({ title: req.params.title })
        .then(result => {
            let deleted = result['deletedCount'];
            if (deleted) {
                res.json(result)
            } else {
                res.status(404).send('404 - Not found');
            }
        }).catch(err => {
            res.status(500).send('Database Error occured');
        });
});

app.use((req, res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started'); 
});