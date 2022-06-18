function Student(n,c,u,i,b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-Web${b}`;
}

function storeData(event) {
    event.preventDefault();

    let form = document.getElementById("studentdata");

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(name,course,unit, image, batch);

    let data = JSON.parse(localStorage.getItem("StudentInfo")) || [];
    data.push(s1);
    //console.log("data:", data)

    localStorage.setItem("StudentInfo", JSON.stringify(data))

    window.location.reload();

    //console.log(name,course,unit,image,batch)
}

function calculatror() {
    let data = JSON.parse(localStorage.getItem("StudentInfo")) || [];

    let obj = {};

    for(i=0; i<data.length; i++){
      if(!obj[data[i].batch]){
        obj[data[i].batch] = 0;
      }
    }

    for(i=0; i<data.length; i++){
      obj[data[i].batch]++; 
    }

    //console.log(obj);

    
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        document.getElementById("navbar").append(key + " :- " + obj[key] +", ");
          //console.log(key + " -> " + obj[key]);
      }
  }

  }

  calculatror();

  


