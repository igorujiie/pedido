function sim() {
    alert("Vou namorar a mulher mais pereita do Mundo!!!!")
}


function nao(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = posicaoAleatoria(10,90);
    btn.style.left = posicaoAleatoria(10,90);
    console.log("opa, botao errado")
}

function posicaoAleatoria(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}