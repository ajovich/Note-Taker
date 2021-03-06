// Dependencies
const fs = require('fs');
const db = require('../db/db.json');

const data = fs.readFileSync('./db/db.json', 'utf8');
const notes = JSON.parse(data);
console.log(notes);

// Function whenever a note is added or deleted
function saveNotes () {
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        if (err) throw err;
        return true;
    });
};

module.exports = (app) => {
    // GET Requests
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    // POST Requests
    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        res.json(true);
        saveNotes();
    });

    // GET Requests for note with specific id
    app.get('/api/notes/:id', (req, res) => {
        res.json(notes[req.params.id]);
        console.log(req.params.id);
    });

    // DELETE Requests for note with specific id
    // 'splice' method to delete existing note based on specific id
    app.delete('/api/notes/:id', (req, res) => {
        notes.splice(req.params.id, 1);
        saveNotes();
    });
};