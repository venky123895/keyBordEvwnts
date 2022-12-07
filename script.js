const text=document.getElementById('text');
const keyname=document.getElementById('keyType');
const keyCode=document.getElementById('keyCode');
document.onkeydown=function(e){
    text.innerText='You Pressed:'+`${keyname.innerText=e.key}`;
    keyCode.innerHTML=e.keyCode;
}