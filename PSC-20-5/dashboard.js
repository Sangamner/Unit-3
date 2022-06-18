function append() {
    let data = JSON.parse(localStorage.getItem("StudentInfo")) || [];
    //console.log(data)

    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function(el,index) {
      let div = document.createElement("div");
      //console.log(el);
      let image = document.createElement("img");
      image.src = el.image;

      let name = document.createElement("p");
      name.innerText = "Name:-"+el.name;

      let course = document.createElement("p");
      course.innerText = "Course:-"+el.course;

      let unit = document.createElement("p");
      unit.innerText = "Unit:-"+el.unit;

      let batch = document.createElement("p");
      batch.innerText = "Batch:-"+el.batch;

      let button = document.createElement("button");
      button.innerText="Remove";
      button.addEventListener("click",function(){
          remove(index)
      });

      div.append(image,name,course,unit,batch,button)
      container.append(div);
    }) 
}

append();

function remove(index) {
    let data = JSON.parse(localStorage.getItem("StudentInfo")) || [];
    //console.log("data:", data)

    let newData = data.filter(function(el,i){
      if(i === index){
          let trash = JSON.parse(localStorage.getItem("trash")) || [];
          trash.push(el);
          localStorage.setItem("trash", JSON.stringify(trash))
      }
      else{
          return i!== index;
      }
    });

    localStorage.setItem("StudentInfo", JSON.stringify(newData))
    append();
    //console.log(newData)
}