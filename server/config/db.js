const mongoose = require('mongoose');
const mongoDB_URI = "mongodb://localhost/app_documents";  // database name: app_documents
const AppDocument= require('../models/app-document');

( async () => {
    try {
        await mongoose.connect(mongoDB_URI);
        console.log('Connection successful');
    } catch(err) {
        console.log(err);
    }
})();

// test: create a sample app document 
async function createAppDocument() {
    try {
        const project = await AppDocument.create({
            projectName: 'Facultative Reinsurance Spreaders',
            owner: 'Ryan D\'entremont',
            backupOwner: 'Rui Wang',
            description: 'saving FAC spreaders to database for property, liability, marine and umbrella'
        });
        console.log(project);
    } catch (err) {
        console.log(err);
    }
}

createAppDocument();

const db = mongoose.connection;
module.exports = db;



