const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si😊.jeje la amo ❤️')
    alert('ya somos novios jajajs 😊🤣😍❤️ ')
    alert('este programa se autoeliminara.❤️')
    alert('Ahora una cancion. 🎶😽❤️')
    location.href = 'https://www.youtube.com/watch?v=JW4-MO05EN8'
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})