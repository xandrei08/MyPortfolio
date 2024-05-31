
export class bringData{
  constructor(data,data1){
      this.data = document.querySelector(data);
      this.data1 = document.querySelector(data1)
      let value1 = this.data;
      let value2 = [];
      value2.push(this.data1);
      value1.addEventListener("mouseenter", function(){
          value2.forEach(item =>{
              item.style.display = "block";
          })
      })
     value1.addEventListener("mouseleave", function(){
         value2.forEach(item => {
             item.style.display = "none";
         })
     })
  }
}


