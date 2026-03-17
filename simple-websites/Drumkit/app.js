
let btns= document.querySelectorAll(".drum");

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click" , function() {
        console.log("btns is clicked");
        console.log(this.innerHTML);
      let btnValue=this.innerHTML;
        sound(btnValue);
        animation(btnValue);
        });
}

  document.addEventListener("keypress" , function(e){
  console.log("keypressed");
  console.log(e);
  sound(e.key);
  animation(e.key);
  
  });


function sound(btnValue){
console.log("sounded");

switch(btnValue)  {
    
    case 'w':
        var audio =new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case 'a':
        var audio =new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case 's':
        var audio =new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case 'd':
        var audio =new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case 'j':
        var audio =new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case 'k':
        var audio =new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case 'l':
        var audio =new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    default:
      console.log('error in generating sound');
  }

}



function animation(keyvalue){
  var blink=document.querySelector("." + keyvalue );
  blink.style.color="white";
  blink.classList.add("pressed");

  setTimeout(function(){
  blink.classList.remove("pressed");
  blink.style.color="#DA0463";
  } , 300)
}