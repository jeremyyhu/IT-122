import mongoose from 'mongoose';
const { Schema } = mongoose;
import { connectionString } from '../credentials.js';

mongoose.connect(connectionString, { dbName: 'sccprojects' });

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});


const albumSchema = new Schema({
    title: { 
        type: String, required: true 
    },
    artist: String,
    cover: String,
    year: Date,
    genre: String
});

export const Album = mongoose.model('Album', albumSchema);