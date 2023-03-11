let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = function() {
    menu.classList.toggle('active');
}

// clock
let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

const clock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock)

// section 12
var text = document.getElementById('text');
var shadow = '';
for (let i = 0; i < 30; i++) {
    shadow += (shadow? ',' : '') + -i*1+'px ' + i*1+'px 0 #d9d9d9'; 
}
text.style.textShadow = shadow;


