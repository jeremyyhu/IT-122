'use strict'
import express from 'express';
import { getAll, getItem } from './data.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

// send content of 'home' view to browser
app.get('/', (req,res) => {
    res.render('home', { albums: getAll() });
});

app.get('/detail', (req,res) => {
    res.render('detail', { album: getItem(req.query.title) });
});

app.listen(app.get('port'), () => {
    console.log('Express started'); 
});