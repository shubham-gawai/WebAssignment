
const input=(e)=>{
    const text=document.getElementById('wrote');
    const value=(e.target.value);
    text.innerHTML=value;
}

document.getElementById('input-field').addEventListener('input',input);