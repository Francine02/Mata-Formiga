let c = 1;

function changeSize () {
    const height = window.innerHeight; //Pegar a altura ao mudar a tela
    const width = window.innerWidth; //Pegar a largura ao mudar a tela

    createAnt (height, width);
}

function existAnt () {
    const antElement = document.getElementById('ant');
    if (antElement) {
        antElement.remove();

        if (c > 3) {
            window.location.href = 'gameOver.html';
        } else {
            document.getElementById('c' + c).src = "./img/vazio.png";
            c++;
        }
    }
};

function createAnt (height, width) {
    existAnt ()

    const x = Math.round(Math.random() * width) - 90; //Gera um número aleatório para x
    const y = Math.round(Math.random() * height) - 90; //Gera um número aleatório para y

    if (x < 0 || y < 0) {
        return 0;
    }

    let ant = document.createElement('img'); //Cria a formiga
    ant.src = './img/Formiga.png';
    ant.onclick = function () { this.remove() }
    ant.style.position = 'absolute';
    ant.style.left = x + 'px';
    ant.style.top = y + 'px';
    ant.id = 'ant';

    document.body.appendChild(ant)
}

function timeChance() {
    let timeCont = 16; 

    const time = setInterval(function() {
        timeCont -= 1;

        if (timeCont < 0) {
            clearInterval(time);
            window.location.href = 'win.html';
        } else {
            document.querySelector('#time').innerText = timeCont + 's'; 
        }
    }, 1000);
    
}

window.onload = function() {
    timeChance();
};
