// Add the coffee to local storage with key "coffee"
let savedata=JSON.parse(localStorage.getItem("coffee"))||[];
document.getElementById("coffee_count").innerText=savedata.length

async function getdata(){
    let res= await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    let data= await res.json();
    append(data.menu.data)
}
getdata()

function append(data){
    // console.log(data)
    let container=document.getElementById("menu");
    container.innerHTML=null;
    data.forEach(function(elem){
        // console.log(elem)
       
        let div=document.createElement("div");
        div.setAttribute("id","adjust")

        let image=document.createElement("img");
        image.src=elem.image;

        let name=document.createElement("p");
        name.innerText=elem.title;

        let price=document.createElement("p");
        price.innerText=elem.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Bucket";

        btn.addEventListener("click",function(){
            addtocard(elem)
        })

        div.append(image,name,price,btn)
        container.append(div)
    })
}

function addtocard(elem){
    savedata.push(elem)
    console.log(elem)
    // console.log(savedata)
    // alert("product added")
    localStorage.setItem("coffee",JSON.stringify(savedata))
    window.location.reload();
}
