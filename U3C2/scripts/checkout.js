function orderproduct(event){
    event.preventDefault();

    let name=document.getElementById("name").value;
    let mobile=document.getElementById("number").value;
    let Adrress=document.getElementById("address").value;
    if(name==""&&mobile==""&&Adrress==""){
           alert("Enter Correct Detail")
    } 

    else{
        let a=setInterval(function(){
            alert(" Your order is accepted")
            clearInterval(a);
        },0)
      
       

      let   b=setInterval(function(){
            alert("Your order is being Prepared")
            clearInterval(b);
            
        },3000)
        
        
        let c=setInterval(function(){
            alert("Your order is being packed ")
            clearTimeout(c);
        },8000)

        let d=setInterval(function(){
            alert("Your order is out for delivery ")
            clearInterval(d);
        },10000)

        let f=setInterval(function(){
            alert("Order delivered ")
            clearInterval(f);
        },12000)
        
    }
}