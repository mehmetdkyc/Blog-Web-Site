
const path = require('path')
const express= require('express')
const exphbs= require('express-handlebars')
const app = express()
const port=3000
const hostname='127.0.0.1'
const mongoose= require('mongoose')
const fileUpload=require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate

var bodyParser= require('body-parser')

//connection to database
mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//file upload
app.use(fileUpload())

//middleware
app.use(express.static('public'))


//handlebars
app.engine('handlebars',exphbs({helpers:{generateDate:generateDate}}))
app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//route operation
const main = require('./routes/main')
const posts = require('./routes/posts')

app.use('/',main)
app.use('/posts',posts)






/*app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'index.html'))) // program index.htmlin nerde olduğunu anlaması için path librarysini kullanarek 
// sendfile fonksiyonu ile yolunu veriyoruz.*/


app.listen(port,hostname,()=> console.log(`Server working, http://${hostname}:${port}/`))
