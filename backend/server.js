const express= require('express')
const app= express()
const cors= require('cors')
const path= require('path')
const bodyParser = require('body-parser')
const PORT= 80
const db = require('./db')

const router = require('./routes')

//database connect
db.connect()

//middleware
app.use(bodyParser.json({limit: '50mb'}))  // for parsing application/json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))  // for parsing application/x-www-form-urlencoded

//cors
app.use((req, res,next)=>{
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//routes
// app.use('/api', require('./routes'))


app.use('/uploads', express.static(path.join(__dirname, "/../uploads")))
app.use('/uploads', express.static(path.join(__dirname, "/../frontend/build")))

app.get('*', (req, res)=>{
    try{
        
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
        // res.sendFile(path.join(`${__dirname}/../public/index.html`))

    }
    catch(err){
        res.send("Oops! Something went wrong")
        console.log(err)
    }
})

app.use(cors())

//server listen
app.listen(process.env.PORT || 80, () => {
    console.log(`Server is running on port ${PORT}`);
});

//router
app.use('/api', router)

