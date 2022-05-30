// On clicking remove button the item should be removed from DOM as well as localstorage.

var addeddata=JSON.parse(localStorage.getItem("coffee"))||[];
console.log(addeddata)

var total= addeddata.reduce(function(sum,elem){
    // console.log(addeddata)
    // console.log(elem)
       return sum+ Number(elem.price)
},0)

 console.log(total)

 document.getElementById("total_amount").innerText=total
  
    let container=document.getElementById("bucket");
    
    addeddata.forEach(function(elem,index){
        let div=document.createElement("div");
        div.setAttribute("id","adjust")

        let image=document.createElement("img");
        image.src=elem.image;

        let name=document.createElement("p");
        name.innerText=elem.title;

        let price=document.createElement("p");
        price.innerText=elem.price;

        let btn=document.createElement("button");
        btn.innerText="Remove";

        btn.addEventListener("click",function(){
            addtocard(elem,index)
        })

        div.append(image,name,price,btn)
        container.append(div)
    })

    // var removedata=JSON.parse(localStorage.getItem("coffee"))
function addtocard(elem,index){
    addeddata.splice(index,1)
    // console.log(elem)
    // console.log(savedata)
    // alert("product added")
    localStorage.setItem("coffee",JSON.stringify(addeddata))
    window.location.reload()
}