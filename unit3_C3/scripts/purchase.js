let data=JSON.parse(localStorage.getItem("purchase"));
let userdata=JSON.parse(localStorage.getItem("user"))
let balance =document.getElementById("wallet_balance");
console.log(data)
balance.innerHTML=userdata.amount;

data.forEach(function(el){
    let container = document.getElementById("purchased_vouchers");

let div= document.createElement("div");

let image= document.createElement("img");
image.src=el.image;

let name= document.createElement("h3");
name.innerText=el.name;

let price= document.createElement("h3");
price.innerText=el.price;


div.append(image,name,price)
container.append(div)

})

