const mongoose = require('mongoose');

const appDocumentSchema = new mongoose.Schema({
    // project: {
        projectName: {
            type: String,
            required: true
        },    // e.g. Facultative Reinsurance Spreaders
        owner: {
            type: String,
            required: true
        },          // e.g. Ryan D'entremonte
        backupOwner: String,    // e.g. Rui Wang
        description: String     // describe app's main function. e.g. saving reinsurance spreader data for property, liability, marine and umbrella
    // },

    // code: {
    //     gitRepoURLs: [String],  // use SSH
    //     keyTechnologies: [String],  // 'Angular', 'Node.js', 'MS SQL', 'MongoDB'. multi-choices in Angular
    //     description: String    // e.g. branch 'production' is for deployment'
    // },

    // externalAPIs: [    // document external APIs only, i.e. the app's dependencies. no need to document APIs in app back end
    //     {
    //         API_name: String,
    //         url: String,
    //         type: String,   // 'REST', 'SOAP' - single-choice in Angular
    //         source: String,  // 'HTG', 'Vendor', 'Solutions' (James built an API off HR table)
    //         description: String  // e.g. providng earthquake risk score from CoreLogic (vendor)
    //     }
    // ],

    // data: [
    //     {
    //         serverName: String,
    //         databaseName: String,
    //         tables: [
    //             { 
    //                 tableName: String,
    //                 type: String, // 'source' (app retrieves data from), 'target' (app saves data to), 'both'. single-choice in Angular
    //                 description: String, // e.g. sourcing building data from ODS; saving building data entered by user
    //             }
    //         ],
    //     }
    // ],
    
    // deployments: [
    //     {
    //         date: Date,
    //         method: String, // 'docker', 'source code'
    //         type: String,   // 'initial release', 'bug fix', 'enhancement'. multi-choices in Angular
    //         description: String,    // e.g. fixed a bug in building V summation
    //         appService: {
    //             environment: String,  // 'R&D', 'UAT' or 'Prod'. Defaults to Prod. Documenting non-prod deployment is optional.
    //             name: String,
    //             URL: String
    //         },
    //         git: [
    //             {
    //                 url: String,    // optional. most apps will have a single git repo URL
    //                 branch: String,
    //                 tagOrHash7: String // if git commit is not tagged, use the first 7 characters of your commit hashkey
    //             }
    //         ]
    //     }
    // ]

});

module.exports = mongoose.model('AppDocument', appDocumentSchema);