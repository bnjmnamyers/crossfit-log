const cors = require('cors');
const express = require('express');
const mongodb = require('mongodb');

const app = express();
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'crossfit-log';

app.use(cors());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log(`Unable to connect to database due to the following ${error}`);
    }

    const db = client.db(databaseName)
    
    // db.collection('WODs').insertOne({
    //     coachedBy: '',
    //     date: '2021-08-06',
    //     description: 'For Time',
    //     howIFelt: 'This workout while only three and half minutes really shocked me. My shoulds got fatigued a lot more quickly than I was expecting. I fel like I could have pushed it a little further and shaved about 30 seconds off of my time but all-in-all I was pretty happy with the result.',
    //     movementList: ['15 DB Clean and Jerk', '45 Jumping Pull-ups', '15 DB Clean and Jerk'],
    //     isHeroWOD: false,
    //     name: 'Little Dipper',
    //     results: '3:30.42',
    //     text: 'Weight for scaled is 35# and the measurement for jumping pull-ups was head had to be 6" from the bottom of the bar. Pull-ups must start with the eblows in a fully locked out positin and the chin must come above the bar after the jump.',
    //     time: '7:00 am',
    //     type: 'Metcon',
    // })

    db.collection('personalRecords').insertOne({
        date: '2021-03-24',
        lift: 'Front Squat',
        weight: '275'
    })
})

module.exports = app;