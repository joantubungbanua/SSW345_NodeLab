//Load the MySQL pool connection 
const pool = require('../data/config');


const router = app => {
    app.get('/', (request,response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });


const users = [{
    id: 1,
    name: "Instructor",
    email: "ta_345@stevens.edu", 

}, 
{ 
    id: 2,
    name: "TA",
    email: "ta_345@stevens.edu",
},

];


app.get('/users', (request,response) => {
    response.send(users);
});

//Display all workers query from remote DB 


app.get('/handles', (request,response) =>{
    pool.query('SELECT * FROM Handle', (error, result) =>{
        if (error) throw error;
        response.send(result);
    })
}); 

app.get('/handles/:handle', (request, response) => {
    const handle = request.params.handle;
    pool.query('SELECT * FROM Handle WHERE handle=?', handle, (error,result) =>{
        if (error) throw error;

        response.send(result);
    } );
}
)

//Add a new developer

app.post('/handles', (request, response) => {
    pool.query('INSERT INTO HANDLE SET ?', request.body, (error, result) =>{
        if(error) throw error;
        response.status(201).send(`Developer added`);
    })
})



}
 //Export the router
module.exports = router;