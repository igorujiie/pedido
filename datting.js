function sim() {
  alert("Estou namorando a mulher mais perfeita do Mundo!!!!")
  window.location.href = "review.html"
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