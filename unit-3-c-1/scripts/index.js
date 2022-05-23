//store the products array in localstorage as "products"

function Students(t,d,p,u){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=u;
}

function savedata(event){
    event.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let url=form.image.value;
    
    let s1= new Students(type,desc,price,url)
    
    let arr= JSON.parse(localStorage.getItem("products"))|| [];
    console.log(arr)
    arr.push(s1);

    localStorage.setItem("products",JSON.stringify(arr))

    document.getElementById("products").reset();

    
}
