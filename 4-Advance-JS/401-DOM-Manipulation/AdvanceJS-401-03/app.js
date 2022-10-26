// 
let count=1;

function controller(x){
    count+=x;
    corousel(count);
}

corousel(count);

function corousel(num){
    let slides=document.getElementsByClassName('slide');
    if (num == slides.length){
        num=0;
        count=0;
    }
    if(num==-1){
        num=slides.length-1;
        count=slides.length - 1;
    }
      //console.log(slides);
      for (let y of slides) {
        y.style.display = "none";
      }
    slides[num].style.display="block"
}