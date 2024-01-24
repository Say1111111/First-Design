//chick if ther's Local Storage color option
let minColors = localStorage.getItem("color-option");

if(minColors !==null){ 

    document.documentElement.style.setProperty('--main-color' , minColors);

};

//random background option
let backgroundoption = true;
//varaible To control the background Interval
let BackgroundInterval;

//Chick if ther's local Storage Random Background Item
let BackgroundLocalItem = localStorage.getItem("background_option");

//Chick if Random LocalBackground is Not Empty
if(BackgroundLocalItem !== null){

    if(BackgroundLocalItem === 'true'){
        backgroundoption = true;
        
    }else{
        backgroundoption = false;
    
    };
    
    //Remove active Class From All Span
    document.querySelectorAll(" .Random-Backgrounds span").forEach(element =>{
    
        element.classList.remove("active");
    });
    
    if(BackgroundLocalItem === 'true'){
    
        document.querySelectorAll(".Random-Backgrounds .yes").classList.add("active");
    }else{
        document.querySelectorAll(".Random-Backgrounds .no").classList.add("active");
    };
    };

//Click On Taggle Setting Gear
document.querySelector(".toggel-settings .fa-gear").onclick = function(){

    //Taggel class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    //Taggel class oppen On main settings Box
    document.querySelector(".Settings-Box").classList.toggle("open");   
    }; 

//Switch colors
const colorsList = document.querySelectorAll(".color-list li");

//Loop on list items
colorsList.forEach(li =>{

    //click on every list items
    li.addEventListener("click",(e) =>{

        HandleActive(e);

        //set color on Root
        document.documentElement.style.setProperty('--main-color' ,e.target.dataset.color);

        //set color on the local storge
        localStorage.setItem('color-option', e.target.dataset.color);

        //Remove Active Class FromAll Childrens
       HandleActive(e);
    });
});




//Swich Random Background Option
const randomBackEl = document.querySelectorAll(".Random-Backgrounds span");

//Loop on All spans
randomBackEl.forEach(span =>{

    //click on every span
    span.addEventListener("click",(e) =>{

        //Remove Active Class FromAll Childrens
        HandleActive(e);

        if(e.target.dataset.background ==='yes'){

            backgroundoption = true;

            randomizeImg();

            localStorage.getItem("background_option",true);
        }else{

            backgroundoption = false;

            clearInterval(BackgroundInterval);

            localStorage.getItem("background_option",false);
        }
    });
});
    //Selct Landung Page
let landingPage  =document.querySelector(".landing-page");

//Get Array of Images
let imgArray = ["1s.jpg","2s.jpg","3s.jpg","4s.jpg","5s.jpg"];

 //function To Ranomize Imgs
function randomizeImg(){

    if(backgroundoption===true){

        BackgroundInterval= setInterval(()=>{
            //get Random Number
            let randomNumber = Math.floor(Math.random()*imgArray.length);
        
            landingPage.style.backgroundImage = ' url("imgs/'+imgArray[randomNumber]+'")';
            
        },1000);
    }
}

//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

     //Skills Offset Top
     let SkillsOffsetTop = ourSkills.OffsetTop;
     
    //Skills OUter height
    let SkillsouterHeight = ourSkills.OffsetHeight;
    
//     //Window Height
    let windoeHeight = this.innerHeight;

    
//     //window Scroll Top
  let windowScrollTop = scrollY;

   if(windowScrollTop >(SkillsOffsetTop + SkillsouterHeight-windoeHeight)){

    
    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

   allSkills.forEach(skill =>{
    
        skill.style.width = dataset.progress;
});
};

};

   // Creat Popup With Java Image
        
   let OurGallery = document.querySelectorAll('.Gallery img');

   OurGallery.forEach(img =>{

    img.addEventListener('click' ,(e) =>{

//Creat Overlay Element
let Overlay = document.createElement("div");

//Add Class To Overlay
Overlay.className = "popup-overlay";

//append overlay to the boody
document.body.appendChild(Overlay);

//Creat the Popup
let PopUpBox = document.createElement("div");

// Add Class To the PopUp Box
PopUpBox.className = "popup-box";

if(img.alt !== null){
   //Create Heading
  let ImgHeading = document.createElement("h3");
  
   //Creat Text For Heading
  let ImgText = document.createTextNode(img.alt );
  
  //Append The Text To The Heading
  ImgHeading.appendChild(ImgText);
  
  //Append The ImgHeading To The PopUp box
  PopUpBox.appendChild(ImgHeading);
  
  
  };
//Creat Image
let popupImage = document.createElement("img");

//Set Image Surce
popupImage.src  =img.src;

//Add image to PopUp box
PopUpBox.appendChild(popupImage);

//append popup box to body
document.body.appendChild(PopUpBox); 

//Creat The Close Span
let CloseButton = document.createElement("span");

//Creat The Close Button Text
let CloseButtonText = document.createTextNode("X");

//Append text To Close Button
CloseButton.appendChild(CloseButtonText);

//Ad Class TO Close Button
CloseButton.className = "close-Button";

//Add Close Button To The PopUp Box
PopUpBox.appendChild(CloseButton);

           });

       });

       //Close PopUp
       document.addEventListener('click',(e) =>{
if(e.target.className == 'close-Button'){

   //Remove the Curent PopUp
   e.target.parentNode.remove();

   //Remove Overlay
   document.querySelector('.popup-overlay').remove();
}
       });

       //Select All Bullets
const AllBullets= document.querySelectorAll(".nav-bullets .bullet");
//Select All Links
const AllLinks = document.querySelectorAll(".links a ");

function ScrollTosomewhere(elements){

elements.forEach(ele =>{

    ele.addEventListener("click", (e) =>{

        e.preventDefault();

   document.querySelector(e.target.dataset.section).scrollIntoView({

    behavior:'smooth'

   })
    
    });
    
});

}
ScrollTosomewhere(AllBullets);
ScrollTosomewhere(AllLinks);

// Handle Active State
function HandleActive(ev){

    //Remove active class Frome All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{

        element.classList.remove("active");
    });
    //Add Active Class on self

    ev.target.classList.add("active");

};

let bulletsSpan = document.querySelectorAll(".Bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let buletLocalItem = localStorage.getItem("Bullets-option");

if(buletLocalItem != null){

bulletsSpan.forEach(span =>{

    span.classList.remove("active");
});

if(buletLocalItem === 'block'){

    bulletsContainer.style.display = 'block' ;

    document.querySelector(".Bullets-option .yes").classList.add("active");
}else{

    bulletsContainer.style.display = 'none' ;

    document.querySelector(".Bullets-option .no").classList.add("active");
}
}

bulletsSpan.forEach(span =>{

    span.addEventListener("click" , (e) => {

        if(span.dataset.display === 'Show'){

         bulletsContainer.style.display = 'block' ;

         localStorage.setItem("Bullets-option" , 'block');

        }
        else{
    
            bulletsContainer.style.display = 'none';

            localStorage.setItem("Bullets-option" , 'none');

        }
HandleActive(e);

    });
}); 

//Reset button
document.querySelector(".reset-option").onclick = function() {
    // localStorage.clear();

    localStorage.removeItem("Bullets-option");
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    window.location.reload();
}

//Taggle Menue

let TaggelBtn = document.querySelector(".taggle-menu");

let tlinks = document.querySelector(".links");

TaggelBtn.onclick   = function(){
//
    this.classList.toggle("menu-active");
    
//toggle classList "open" On Links
    tlinks.classList.toggle("open");
};

//Click AnyWhere OutSide Menu And Toggle Button

document.addEventListener("click" , (e) => {

    if(e.target !==TaggelBtn && e.target !== tlinks){    

//Check if the menu is Open
    if(tlinks.classList.contains("open")){

//Toggle class "menu-active" O Button 
        TaggelBtn.classList.toggle("menu-active");

//toggle classList "open" On Links
    tlinks.classList.toggle("open");
    }

}
});

//Stop propagation On Menu
tlinks.onclick = function(e){

    e.stopPropagation();
}
 // Handle Active State
// function HandleActive(ev){

//     //Remove active class Frome All Childrens
//     ev.target.parentElement.querySelectorAll(".active").forEach(element =>{

//         element.classList.remove("active");
//     });
//     //Add Active Class on self

//     ev.target.classList.add("active");

// };