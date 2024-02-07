const dice = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png','dice5.png', 'dice6.png'];
let randomPlayer1 = Math.floor(Math.random()*6);
let randomPlayer2 = Math.floor(Math.random()*6);

let res = document.querySelector('h1');

    
document.querySelector(".img1").setAttribute('src', `images/${dice[randomPlayer1]}`)
document.querySelector(".img2").setAttribute('src', `images/${dice[randomPlayer2]}`)

if(randomPlayer1 > randomPlayer2){
    res.innerHTML = "Player 1 Win!"
}else if(randomPlayer1 < randomPlayer2){
    res.innerHTML = "Player 2 Win!"
}else{
    res.innerHTML = "draw paly again !"
}

