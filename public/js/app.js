//console.log('client side js is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{

// response.json().then((data)=>{
//     console.log(data)
// })
// })



const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#msg1')
const messagetwo=document.querySelector('#msg2')

weatherForm.addEventListener('submit',(e)=>{
e.preventDefault()

const location=search.value;
    //console.log(location)
    messageone.textContent='loading .....';
messagetwo.textContent=''
    fetch('http://localhost:3000/weather?address='+location+'').then((response)=>{

response.json().then((data)=>{
    if(data.error){
//console.log(data.error);
messageone.textContent=data.error;

    }else{
    // console.log(data.location)
    // console.log(data.forecastdata)
    messageone.textContent=data.location;
    messagetwo.textContent=data.forecastdata;

    }
})
})

})