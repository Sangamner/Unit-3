function Createobj(name,contact,email,password){

    this.name=name;
    this.contact=contact;
    this.email=email;
    this.password=password


}


let arr= JSON.parse(localStorage.getItem("signupdetail")) ||[];

function getdetail(event){
    
    event.preventDefault();
    let form=document.querySelector("form");
    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let password=form.password.value;
    if(name!==""&&contact!==""&&email!==""&&password!==""){
        let p1=new  Createobj(name,contact,email,password)
       
        arr.push(p1);
        form.reset();
      
    }
    localStorage.setItem("signupdetail",JSON.stringify(arr))
    console.log(arr)
    
 
}



