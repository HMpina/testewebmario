
const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');

    setTimeout( () => {
    
        mario.classList.remove('jump');
    
    }, 550)

}

const loop = setInterval(() => {
    
    const pipe = document.querySelector('.pipe');
    const clouds = document.querySelector('.clouds');
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;

    const fim = document.querySelector('.fim');
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition< 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.left = `${cloudsPosition}px`;
        
        fim.style.display = 'block';
        fim.style.position = 'absolute';
        fim.style.left = '40%';
        fim.style.marginTop = '10%';


        mario.style.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '110px';
        mario.style.marginLeft = '20px';


    clearInterval(loop);
    }


},10);


document.addEventListener('keydown', jump);