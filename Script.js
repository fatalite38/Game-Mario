const mario = document.querySelector('.mario');
const barrel = document.querySelector('.barrel');
const clouds = document.querySelector('.clouds');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    const barrelPosition = barrel.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (barrelPosition <= 120 && barrelPosition > 0 && marioPosition < 80) {

        barrel.style.animation = 'none';
        barrel.style.left = `${barrelPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
    
        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);