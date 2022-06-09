const express = require('express');
const router = express.Router();
const AppDocument = require('../models/app-document');

// MongoDB queries are so simple that we do not need to house queries in separate controller files 

// return all app documents
router.get('/allDocuments', (req, res) => {
    AppDocument.find( (err, data) => {
        if (err) {
            console.log(err);
            return err;  // function already returns. no need to use 'else'
        }

        res.json(data);
    });
});

// add a new app document 
router.post('/', (req, res) => {
    AppDocument.create(req.body, (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }

        res.json(data); // return user data
    });
});

// return an app document by ID 
router.get('/:id', (req, res, next) => {
    AppDocument.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }

        res.json(data);
    });
});

// update an existing app document
router.put(':id', (req, res, next) => {
    AppDocument.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }

        res.json(data);  // return user data (new data)
    });
});

// delete an existing app document 
router.delete('/:id', (req, res, next) => {
    AppDocument.findByIdAndRemove(req.params,id, req.body, (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }

        res.json(data);  // return deleted record
    })
});

module.exports = router;



