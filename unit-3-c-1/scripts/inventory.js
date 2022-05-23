let data=JSON.parse(localStorage.getItem("products"))
console.log(data);

data.forEach(function(elem,index){
    let div=document.createElement("div")
    div.setAttribute("id","div1")
    let image=document.createElement("img")
    image.src=elem.image;
    let desc=document.createElement("p")
    desc.innerText=elem.desc;

    let price=document.createElement("p")
    price.innerText=elem.price;

    let type=document.createElement("p")
    type.innerText=elem.type;

    let btn=document.createElement("button");
    btn.innerText="Remove Product";

    div.append(image,desc,price,btn)
    document.getElementById("all_products").append(div)

    btn.addEventListener("click",function(){
        removeProduct(elem,index)
    })
})
 
function removeProduct(elem,index){
       data.splice(index,1)
       console.log(elem)
       localStorage.setItem("products",JSON.stringify(data))
       window.location.reload()
}