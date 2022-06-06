let data=JSON.parse(localStorage.getItem("user"))
console.log(data)



 async function fetchdata(){
  let res= await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
  let data=await res.json();
//   console.log(data)
  append(data[0].vouchers)
}
fetchdata()

function append(data){
  console.log(data)
  data.forEach(function(el){
      let container = document.getElementById("voucher_list");

      let div= document.createElement("div");

      let image= document.createElement("img");
      image.src=el.image;

      let name= document.createElement("h3");
      name.innerText=el.name;

      let price= document.createElement("h3");
      price.innerText=el.price;

      let btn= document.createElement("button");
      btn.innerText="Buy Voucher";

      btn.addEventListener("click",function(){
          BuyVoucher(el)
      })

      div.append(image,name,price,btn)
      container.append(div)
  })
}

let balance =document.getElementById("wallet_balance");
balance.innerText=data.amount;
function BuyVoucher(el){
    if(data.amount>el.price){
        alert("Hurray! purchase successful")
        localStorage.setItem("purchase",JSON.stringify(el))
        balance.innerText=data.amount-el.price;
        
    }
}
