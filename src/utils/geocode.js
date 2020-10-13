

const request=require('request');

const geocode=(address,callback)=>{
    // const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmlzaGFiaGlzaHR3YWwiLCJhIjoiY2tlaTdmdDk5MHZjYzMxcWJ5cXB1eGQ3YSJ9.1fDRmkI86y7fjImppHnnzg&limit=1'
   // console.log(address);
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmlzaGFiaGlzaHR3YWwiLCJhIjoiY2tlaTdmdDk5MHZjYzMxcWJ5cXB1eGQ3YSJ9.1fDRmkI86y7fjImppHnnzg&limit=1'
    
    // request({url:url,json:true},(error,response)=>{
        request({url,json:true},(error,{body})=>{
     
       if(error){
        callback('Unable to connect to the server',undefined)
       }
    //    else if(response.body.features.length === 0){
        else if(body.features.length === 0){
        callback('Unable to  find location. Try another search',undefined)
       }
       else
       {
        callback(undefined,{
        //   latitude:response.body.features[0].center[1],
        //   longitude:response.body.features[0].center[0],
        //   location:response.body.features[0].place_name,
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name,
        })
       }
      
    })
  }
  
  module.exports=geocode;