
const func=(e)=>{
    const text=document.getElementById('wrote');
    const inputtext =(e.target.value);
    text.innerHTML= inputtext;
}

const inputref = document.getElementById('input_field');
inputref.addEventListener('input',func);