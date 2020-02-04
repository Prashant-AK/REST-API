const express= require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const members=require('./Member/member');
const logger=require('./logger/middleware')
const app=express();

//Templating engine
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//example of handlebars by sendig get method
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Blog App',
        members:members
    });
});

//Body parser middleware
app.use(express.json());  //it will accept json object

// it will accept the data as a string or array
app.use(express.urlencoded({extended:false}));

//to handle the rest api
app.use('/prashant',require('./route/Route'));

//to handle the static server
// app.use(express.static(path.join(__dirname,'public')));

// Assigning port and calling the function to run the server
const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{console.log(`Server is running at port ${PORT}`)});
