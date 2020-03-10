// Your code goes here

const headerThang = document.querySelector('.main-navigation');
const h1Thang = document.querySelector('h1');
const busImg = document.querySelector('header img');
const h2s = document.querySelectorAll('h2');
const links = document.querySelectorAll('nav a');
const paragraphs = document.querySelectorAll('p');
const logo = document.querySelector('.logo-heading');
const buttons = document.querySelectorAll('div.btn');
const homeImgs = document.querySelectorAll('.home img');
const pickContentArea = document.querySelector('section.content-pick');

headerThang.addEventListener('click', ()=>{
    h1Thang.textContent = "Cursed Bus";
});

busImg.addEventListener('mouseover', ()=>{
    busImg.setAttribute('src', 'img/scary.jpg');
});

busImg.addEventListener('mouseout', ()=>{
    busImg.setAttribute('src', 'img/fun-bus.jpg');
});

document.body.addEventListener('keydown', ()=>{
    document.body.style.backgroundImage = "url(img/boo.png)";
});

links.forEach(cv => {
    cv.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        h2s.forEach(cv => {
            cv.style.fontFamily = "'Permanent Marker', cursive";
        });
    });
});

logo.addEventListener('dblclick', ()=>{
    paragraphs.forEach(cv=>{
        cv.style.fontFamily = "'Amatic SC', cursive";
    })
});

buttons.forEach(cv => {
    cv.addEventListener('wheel', ()=>{
        homeImgs.forEach(cv => {
            cv.setAttribute('src', 'img/babies.jpg')
        });
    });
});

buttons[0].addEventListener('mouseup', ()=>{
    document.querySelector('header').style.backgroundColor = 'pink';
});

buttons[1].addEventListener('mousedown', ()=>{
    document.querySelector('footer').style.backgroundColor ='#f4f4f4';
});

buttons[2].addEventListener('mouseleave', ()=>{
    document.body.style.backgroundImage = "url(img/scaryBG.jpg)";
});

pickContentArea.addEventListener('mouseenter', ()=>{
    paragraphs.forEach(cv =>{
        cv.style.color = 'red';
    });
});