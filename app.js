import { bringData } from "./navBarModule.js";

let home = new bringData(".home",".line1");
let about = new bringData(".about2",".line2");
let contact = new bringData(".contact",".line3");

let userInput = document.querySelector(".input");
// let userValue = userInput.value.toUpperCase();

// Terms of Use
let newWindow;
let terms = document.querySelector(".termsWindow");
terms.addEventListener("click",function(){
  newWindow= window.open('PrivacyAndTerms/TermsOfUse.html','newWindow', 'width=1200, height=1200, left=300, top=250');
})

//PrivacyPolicy
let PrivacyPolicy;
let privacy = document.querySelector(".privacyWindow");
privacy.addEventListener("click", function(){
  PrivacyPolicy = window.open("PrivacyAndTerms/PrivacyPolicy.html", "_blank",'width=1200, height=1200, left=300, top=250')
})

// Alert Box
window.addEventListener("scroll", showBox)
let once = true;
function showBox(){
  const scrolled = Math.trunc(window.scrollY);
  if(scrolled > 150 && once === true){
    var box = document.createElement('div');
    box.classList.add("alertBox")
    let pText = "Would you like to reveal Andrei skills ?";
    box.innerHTML = 
       `
       <p class = "p-skill"> ${pText}</p>
       <div class = "btns"> 
            <button class = "btnYes"> Yes </button>
            <button class = "btnNo"> No </button>
       </div> `
        document.body.appendChild(box);
        once = false;
  }
  // Yes & No Buttons event listeners
  let btnYes = document.querySelector(".btnYes");
  let btnNo = document.querySelector (".btnNo");

btnYes.addEventListener("click",yesClicked)
btnNo.addEventListener("click", noClicked)

function yesClicked(){
  document.body.removeChild(box);
  document.querySelector(".input").style.display = "block";
}

function noClicked(){
  document.body.removeChild(box);
}
}

function revealSkills() {
  let array = [];
  let arraySymbols = [];
  let arrayRevealSkill = [];
  let skills = document.querySelectorAll(".row > div");
  let symbols = document.querySelectorAll(".row > div > a:nth-child(1)")
  let revealSkill = document.querySelectorAll(".row > div > a:nth-child(2)")

  // Function with For each loop for targeting different values from HTML
  function loopNodes(value1,value2){
   value1.forEach(skill => {
     value2.push(skill);
   })
  }

  loopNodes(symbols,arraySymbols); // TO loop through HTML nodes and return the value in array. 
  loopNodes(revealSkill,arrayRevealSkill); // TO loop through NodeList and return the value in array;

  // For each loop for Filter 
  skills.forEach(skill => {
    array.push(skill.className.split(' ')[0].toUpperCase());
  })

  userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {

      let inputValue = userInput.value.toUpperCase();
      let matchingSkills = array.filter(skill => skill.includes(inputValue));
    
      
      if (matchingSkills.length > 0) {
        console.log("Matching skills found:", matchingSkills);
        let valueOn = "."+ matchingSkills;
        valueOn = valueOn.toLowerCase();
        console.log(valueOn);
        //Function to show up the skills after the filter were applied. 
        function showSkill(){
          if(valueOn.includes(".html")){
            arraySymbols[0].style.display = "none";
            arrayRevealSkill[0].style.display = "block";
            return valueOn;
          }else if(valueOn.includes(".css")){
            arraySymbols[1].style.display = "none";
            arrayRevealSkill[1].style.display = "block";
            return valueOn;
          }
          else if(valueOn.includes(".javascript")){
            arraySymbols[2].style.display = "none";
            arrayRevealSkill[2].style.display = "block";
            return valueOn;
          }
          else if(valueOn.includes(".react")){
            arraySymbols[3].style.display = "none";
            arrayRevealSkill[3].style.display = "block";
            return valueOn;
          }
          else if(valueOn.includes(".bootstrap")){
            arraySymbols[4].style.display = "none";
            arrayRevealSkill[4].style.display = "block";
            return valueOn;
          }
          else if(valueOn.includes(".node")){
            arraySymbols[5].style.display = "none";
            arrayRevealSkill[5].style.display = "block";
            return valueOn;
          }else{
            console.log("Displaying skills doesn't work.")
          }
        }
       

       function animateToReveal(){
        
        var tl
        tl = new TimelineMax({
          repeat:4,
          yoyo:true
        });

        tl.fromTo(showSkill(), 0.7, {
            borderWidth:2,
            ease:Linear.inOut,
            borderColor:"red"
        },
        {
          borderWidth:8,
          ease:Linear.inOut,
          borderColor:"green",
      
        })

       }
      
       animateToReveal();
      } else {
        alert("No matching skills found");
      }
    }
  });
}

revealSkills();


// Scroll function from Projects to About 
