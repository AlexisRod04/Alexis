const express = require('express');
const cors  = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>{
    console.log('Server Listening on PORT: ', PORT);
});

app.get('/usuarios',( request, response) => {
    const status = [
        {
            Name: 'Hugo',
            Country: 'Germany',
            First_Appearance: 'Street Fighter 2nd Impact', 
        },
        {Name: 'Manon', Country: 'France', First_Appearance: 'Street Fighter 6 VI'},
        {Name: 'Zangief', Country: 'Russia', First_Appearance: 'Street Fighter II'}
    ];
    response.send(status);
});

