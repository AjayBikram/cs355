const clickBtn = document.getElementById('yesBtn');
clickBtn.addEventListener("click",foo);

function foo(){
    let element = document.getElementById('winner');

    
    element.classList.add('winnerGreen')
}
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener("click",noo);

function noo(){
    let element = document.getElementById('')

    
    element.classList.add('winnerRed')
}

