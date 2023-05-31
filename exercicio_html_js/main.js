const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB");

  const valorA = Number.parseInt(campoA.value);
  const valorB = Number.parseInt(campoB.value);
  const containerMsgMenor = document.querySelector(".mensagem-resultado");
  const containerMsgMaior = document.querySelector(".mensagem-resultado");


  if (valorB > valorA) {
    const mensagemMaior = `O valor de B (${valorB}) é maior que o valor de A (${valorA}).`;
    containerMsgMaior.innerHTML = mensagemMaior;
    containerMsgMaior.classList.remove("mensagem-menor")
    containerMsgMaior.classList.add("mensagem-maior")
  } else {
    const mensagemMenor = `O valor de B (${valorB}) é menor que o valor de A (${valorA}).`;
    containerMsgMenor.innerHTML = mensagemMenor;
    containerMsgMaior.classList.remove("mensagem-maior")
    containerMsgMenor.classList.add("mensagem-menor")
  }
});
