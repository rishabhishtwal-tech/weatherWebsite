const path=require('path');
const express= require('express')
const hbs=require('hbs')
const geocode1=require('../src/utils/geocode');
const forecast=require('../src/utils/forecast');

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const port=process.env.PORT || 3000
const app= express();

// Define path for Express config
const publicDir=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to serve
app.use(express.static(publicDir));  //has to comment in order to toget dynamic template


app.get('',(req,res)=>{

    res.render('index',{
        title:'weather',
        name:'Radhdey'
    })

})

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andrew Mead'
//     })
// })



app.get('/help',(req,res)=>{

    // res.send({
    //     name:'Arun',
    //     work:'Developer',
    // });

//     res.send([{
//         name:'Arun',
//         work:'Developer',
//     },
//     {
//         name:'Radhey'
//     }
// ]);
res.render('help',{
    title:'Getting help',
    name:'Radhdey'
})
})

app.get('/about',(req,res)=>{

   // res.send('<h3>About us</h3>');
   res.render('about',{
       title:'about page',
       name:'Rishabh'
   });

})

app.get('/weather',(req,res)=>{

    const address=req.query.address;
    if(!address){
        return res.send({error:'search value must provided'})
    }
    geocode1(address,(error,{latitude,longitude,location}={})=>{
        if(error){
          //  return console.log(error);
         return res.send({error})
        }

       forecast(latitude,longitude,(error,forecastdata)=>{
       if(error){
         //return console.log(error);
        return res.send({error}) 
     }
     
    
     res.send({
        location,
         forecastdata,
         address
     })
     
    //    console.log(location);
    //    console.log(forecastdata);
     
     })
     
     })
})

app.get('/product',(req,res)=>{

    if(!req.query.search){
return res.send({error:'search value must provided'})
    }
    res.send({
        forecast:'sunny day',
        location:'delhi'
    });

})

app.get('/help/*',(req,res)=>{

   // res.send('This help document not found');
   res.render('404',{
    title:'404',
    errorMsg:'This help document not found'
})
})

app.get('*',(req,res)=>{

    // res.send('Page not found');
    res.render('404',{
        title:'404',
        errorMsg:'Page not found'
    })

})

// app.listen(3000,()=>{
//     console.log('3000 port is up')
// })

app.listen(port,()=>{
        console.log( port+' port is up')
    })
