

let id;
async function searchmovies(q){
 try{
  let res= await fetch(`https://www.omdbapi.com/?s=${q}&apikey=e87bbf4a`)
  let data=await res.json()
  return data.Search
   // console.log(data.Search)
 }
 catch(error){
   console.log("error",error)
 }
}
 function append(data){
if(data===undefined){
  return false;
}

  var container=document.getElementById("container");
  container.innerHTML=null;
  console.log(data)
  data.forEach(function(el){
    let p=document.createElement("p")
    p.innerText=el.Title;
    container.append(p)
  })
}



async function main(){
 let get= document.getElementById("input").value;
//  console.log(get)
 let res=searchmovies(get)
 let data=await res;
 append(data)
}


function debounce(func,delay){

if(id){
  clearTimeout(id);
}  

  id=setTimeout(function(id){
       func()
  },delay)
}