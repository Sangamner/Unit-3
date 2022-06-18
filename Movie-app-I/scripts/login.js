let savedetails= JSON.parse(localStorage.getItem("signupdetail")) ||[];
console.log(savedetails);






function logindata(event){
    
    event.preventDefault();
    let form=document.querySelector("form");
    let loginemail=form.email.value;
    let loginpassword=form.password.value;
   
    if(loginemail==''&&loginpassword==''){
        alert("enter valid details")
    }
    else{
        for(let i=0;i<savedetails.length;i++){
            console.log(savedetails[i].email,loginemail)
            console.log(savedetails[i].password,loginpassword)
            if(savedetails[i].email===loginemail&&savedetails[i].password===loginpassword){
                alert("login sucess")
                window.location="index.html"
            }
           
        }
        
    }
  
 
}




