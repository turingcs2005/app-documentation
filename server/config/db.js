const mongoose = require('mongoose');
const mongoDB_URI = "mongodb://localhost/app_documentation";

console.log('start of code');

( async () => {
    try {
        await mongoose.connect(mongoDB_URI);
    } catch(e) {
        console.log(e);
    }
})();

