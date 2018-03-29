const express = require('express')
const app = express()
const router = express.Router();
var pg = require('pg');
const bodyParser = require('body-parser');
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Add headers
app.use(function (req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Allow-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Allow-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Expose-Headers", "Access-Control-*");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    // Pass to next layer of middleware
    next();
    });
    
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:root@13.58.160.100:5432/FBMessengerBot';
const pgclient = new pg.Client(connectionString);


app.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM job', function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log("errrrrrrrrrrrrrr11111" + err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});

app.post('/update', function (req, res) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
         client.query('update job_candidate_relation set interview_date = $1 where id_candidate = $2 and id_job = $3',[req.body.interview_date,24477,33430], function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log("errrrrrrrrrrrrrr2222" + err);
               res.status(400).send(err);
           }
           else {
           console.log("success");
           }
        });
    });
});

var port = process.env.PORT || 8000
app.listen(port);
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
  


  console.log(`Server listening on ${port}`);
