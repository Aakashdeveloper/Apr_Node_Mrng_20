var express = require('express');
var app = express();
var port = 8800;


var navbar = [
    {name:'Home', path:'/'},
    {name:'Movies', path:'/movies'},
    {name:'Product', path:'/product'}
]

var moviesRouter = require('./src/routes/moviesRoutes')(navbar);
var productRouter = require('./src/routes/productRoute')(navbar);
//Static file path
app.use(express.static(__dirname+'/public'))
//Html
app.set('views', './src/views');
//View Enginee
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index',{title:'Home Page',menu:navbar});
})


app.use('/movies',moviesRouter);
app.use('/product',productRouter);

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})