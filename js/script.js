const power = document.querySelector('#power');
const text = document.querySelector('#text');

power.addEventListener('click', active);

function active(){
    power.style.transition = 'all 0.4s';
    power.style.color = '#5bcf89';

    text.style.transition = 'all 0.4s';
    text.style.color = '#d9db39';
    text.style.textShadow = '0 0 20px';

    let audio = new Audio();
    audio.src = 'neon.mp3';
    audio.autoplay = true;
    audio.addEventListener('ended', powerOff);

    let timer = setInterval(frame, 130);


    function frame(){
        text.style.transition = 'all 0.1s'
        let colorText = Math.round(Math.random()*2);

        if(colorText == 1){
        text.style.color = '#bfc239';
        } else if(colorText == 2){
        text.style.color = '#d6d950';
        }
    }

    function powerOff(){
        clearInterval(timer);

        power.style.color = '#31363b';
        text.style.color = '#31363b';
        text.style.textShadow = '0 0 0 #000';
    }

}
