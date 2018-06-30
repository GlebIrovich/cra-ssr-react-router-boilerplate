import express from 'express';
import serverRenderer from './middleware/renderer';
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
// initialize the application and create the routes
const app = express();


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// other static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build')
));
// root (/) should always serve our server rendered page

// app.get('/', serverRenderer);
app.get('*', serverRenderer);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});
