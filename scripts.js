function verifyNome() {
  var campo = document.getElementById("nome").value;
  var numb = /[0-9]/;
  var espaco = / /;
  if (numb.test(campo) || !espaco.test(campo))
    alert("Somente nome e sobrenome");
}

function verifyCel() {
  var letra = /[a-zA-Z]/;
  if (letra.test(document.getElementById("celular").value))
    alert("Celular inválido");
}

function verifyEmail() {
  var campo = document.getElementById("email").value;
  var arroba = /@/;
  var ponto = /\./;
  if (!arroba.test(campo) || !ponto.test(campo))
    alert("Email inválido");
}

function verifyCidade() {
  var campo = document.getElementById("cidade").value;
  var numb = /[0-9]/;
  if (numb.test(campo))
    alert("Cidade inválida");
}

function verifyDiárias() {
  var chegada = new Date(document.getElementById("chegada").value);
  var partida = new Date(document.getElementById("partida").value);
  if (partida > chegada) {
    var dias = (partida.getTime() - chegada.getTime());
    var dias = dias /  (1000 * 60 * 60 * 24);
    document.getElementById("diária").innerHTML = "Sua reserva tem " + dias + " diária(s).";
  }
  else {
    alert("A data de chegada é maior que a data de partida");
    document.getElementById("partida").style.backgroundColor = "yellow";
  }
}

function arrumaCor() {
  document.getElementById("partida").style.backgroundColor = "white";
  document.getElementById("partida").value = null;
}

function verify5anos() {
  if (document.getElementById("bebês").value > document.getElementById("crianças").value)
    document.getElementById("bebês").value = document.getElementById("crianças").value;
}

function confirmaEnvio() {
  alert('Obrigado! Em breve, entraremos em contato para confirmação de sua reserva.');
}