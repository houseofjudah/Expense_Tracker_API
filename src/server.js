const app = require('./app');

const Port = process.env.PORT || 8888


app.listen(Port , () => {
    console.log(`Server is running on port ${Port}`)
});

