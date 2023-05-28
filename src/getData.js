const getData =  ()=>{
  return  fetch('https://api.adviceslip.com/advice').then(res=>res.json()).then(data=>data).catch(err=>alert(err.message))
       }

 export default getData   