alert('Site em Desenvolvimento')

// Movimento para animação do titulo
function alterarTexto() {
    var titulo = document.getElementById("homePage__titulo__span");
    if (titulo.innerHTML === " Desenvolvedor") {
        titulo.innerHTML = " Front-End";
    } else {
        titulo.innerHTML = " Desenvolvedor";
    }
}

setInterval(alterarTexto, 5000)
