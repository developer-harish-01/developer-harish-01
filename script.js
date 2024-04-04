
const menuBtn = document.getElementById('responcive-nav');
let btnValue = 0

function handleMenuBtn(){
    if(btnValue == 0){
        menuBtn.style.display="flex";
        btnValue = 1;
    }else{
        menuBtn.style.display="none";
        btnValue = 0;
    }
}