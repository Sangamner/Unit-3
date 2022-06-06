

function Obj(n,e,a,am){
   if(n!==''&&e!==''&&a!==''&&am!==''){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
   }
}

function getdata(event){
    event.preventDefault();
 let form=   document.querySelector("form");
 let name=form.name.value;
 let email=form.email.value;
 let address=form.address.value;
 let amount=form.amount.value;
let details=new Obj(name,email,address,amount)

localStorage.setItem("user",JSON.stringify(details))
console.log(details)
 
}
