const allIcons = document.querySelectorAll('.draggable-icon');

allIcons.forEach(ekIcon => {
    let dragging = false;
    let pakadPointX = 0;
    let pakadPointY = 0;

    ekIcon.addEventListener('mousedown', function(e) {
        dragging = true;
        ekIcon.style.position='absolute'

        // Mouse ne icon ke andar kaha pakda
        pakadPointX = e.clientX - ekIcon.offsetLeft;
        pakadPointY = e.clientY - ekIcon.offsetTop;

        // Icon sabse upar dikhe
        ekIcon.style.zIndex = 1000;
        // ekIcon.style.position = "absolute"; 
    });

    document.addEventListener('mousemove', function(e) {
        if (dragging) {
            // Mouse ka current position - pakad ka offset
            ekIcon.style.left = (e.clientX - pakadPointX) + "px";
            ekIcon.style.top = (e.clientY - pakadPointY) + "px";
        }
    });

    document.addEventListener("mouseup", function() {
        dragging = false;
        ekIcon.style.zIndex = "";
    });
});




const slider = document.getElementById("slider1");
slider.addEventListener('input',()=>{
    let value =slider.value;
    document.body.style.filter=`brightness(${value}%)`;
})


let bigpanel=document.querySelector('.big-pannel');
let mainmenu=document.querySelector('.main-menu');
 let isOn=true;
mainmenu.addEventListener('click',(e)=>{
   
    if(isOn){
        bigpanel.classList.remove('hidden');
        isOn=false;
    }else{
        bigpanel.classList.add('hidden');
        isOn=true;
    }

    // e.stopPropagation();
   
})
let smallpanel=document.querySelector('.small-pannel');
let othermain =document.querySelector('.small-menu');
let isOpen=true;
othermain.addEventListener('click',(e)=>{
   
    if(isOpen){
        smallpanel.classList.remove('hidden');
        isOpen=false;
    }else{
        smallpanel.classList.add('hidden');
        isOpen=true;
    }

    // e.stopPropagation();
   
});


//date and time

function getDate(){
    let d= new Date();

    let h=d.getHours();
    let m=d.getMinutes();
    
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;

    let time=document.querySelector('.time');
    time.innerText=`${h}:${m}`;


}

getDate();

window.onload = function() {
  getDate();
//   setInterval(getDate, 1000);
};