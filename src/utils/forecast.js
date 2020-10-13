
const request = require('request');

//const url='https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=7e0b5639cfb87ecf33484f31fecf5b3a';
const forecast=(latitude,longitude,callback)=>{

    const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&%20exclude=hourly,daily&appid=7e0b5639cfb87ecf33484f31fecf5b3a';
    
   // request({url:url,json:true},(error,response)=>{
    request({url,json:true},(error,{body})=>{
        
        if(error){
            callback('Unable to connect to the server',undefined)
           }
        //    else if (response.body.message){
            else if (body.message){
            callback('Unable to  find location',undefined)
           }
           else
           {    
              callback(undefined,'It is currently '+body.current.temp+' degree fahrenheit out.Their is '+ body.current.clouds + '% chance of rain')
           }

    })

}


module.exports=forecast;