const express = ('express');
const morgan = ('morgan');
const app = express();

//SETTINGS
app.set('port', process.env.port || 3000);


// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// ROUTES


// Starting Server



app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})

