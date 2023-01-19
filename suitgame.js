function getPilihanComputer() {
    const computer = Math.random();
    if (computer < 0.34) return 'gunting';
    if (computer >= 0.34 && computer < 0.67) return 'batu';
    return 'kertas';
}

function getHasil(computer, player) {
    if (player == computer) return 'DRAW!'; 
    if (player == 'gunting') return (computer == 'kertas') ? 'WIN!' : 'LOSE!';
    if (player == 'batu') return (computer == 'gunting') ? 'WIN!':'LOSE!';
    if (player == 'kertas') return (computer == 'batu') ? 'WIN!' :'LOSE!';
}

function puter() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 2000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    },100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil (pilihanComputer, pilihanPlayer);

        puter();

        setTimeout(function() {
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src', pilihanComputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        },2000);
    });
});








