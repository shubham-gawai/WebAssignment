//

for(var i=0;i<document.querySelectorAll('.drum').length;i++){ 
    document.getElementsByClassName('drum')[i].addEventListener('click',function(){
      var buttontext=this.innerHTML;
      console.log("key has been clicked");
      // console.log(buttontext);
      makesound(buttontext);
    })
  }
    document.addEventListener("keypress",function(e){
      console.log("key has been pressed")
      // console.log(e.key);
      makesound(e.key);
    })
    function makesound(buttontext){
      if(buttontext=='w'){
          var tom1=new Audio("sound/tom-1.mp3");
          tom1.play();
      }
      if (buttontext == "a") {
        var tom2 = new Audio("sound/tom-2.mp3");
        tom2.play();
      }
      if (buttontext == "s") {
        var tom3 = new Audio("sound/tom-3.mp3");
        tom3.play();
      }
      if (buttontext == "d") {
        var tom4 = new Audio("sound/tom-4.mp3");
        tom4.play();
      }
      if (buttontext == "j") {
        var snare = new Audio("sound/snare.mp3");
        snare.play();
      }
      if (buttontext == "k") {
        var kick = new Audio("sound/kick-bass.mp3");
        kick.play();
      }
      if (buttontext == "l") {
        var crash = new Audio("sound/crash.mp3");
        crash.play();
      }
    }
  