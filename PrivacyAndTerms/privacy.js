let content = document.querySelector(".content");
console.log(content);

let showText;
content.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
     showText = `${content.textContent}`
      document.body.append(showText);
      content.style.display="none";
    }
})