const mongoose=require('mongoose')

const Post=require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//delete
Post.findByIdAndDelete('60dc839e589bc130b0d6dd41',(error,post)=>{
    console.log(error,post)
})

//find by id and update
/*Post.findByIdAndUpdate('60dc839e589bc130b0d6dd41',{
    title: 'Title has updated'
},(error, post)=>{
    console.log(error,post)
})*/
/*
Post.create({
    title:'Benim ikinci post Başlığım',
    content: 'İkinci Post içeriği, ilk içerik'
}, (error,post)=>{
    console.log(error,post)
})
*/