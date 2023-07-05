const express = require ('express');
const app = express();

//defining a route for the index page
app.get('/',(req ,res) => {
    res.sendFile(__dirname + '/Index.html');
});
//starting server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});