// alert("hey I am working");

let arr=document.getElementsByClassName('container');

for(let i=0;i<arr.length;i++){
    if(i==0){
        arr[i].style.backgroundColor="blue";
    }
   else if (i==8){
    arr[i].style.backgroundColor="green"
   }
   else if(i==16){
    arr[i].style.backgroundColor = "palevioletred";
   }
   else if(i%2==1){
    arr[i].style.backgroundColor="lime"
   }
   else {
    arr[i].style.backgroundColor = "white";
   }
}