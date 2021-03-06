function filtrarFilmes(form) {
  var mostrar;
  linha = document.getElementById("TabelaListaFilmes").getElementsByTagName("tr");

  nome = form.nome.value.toUpperCase();
  genero = form.genero.value.toUpperCase();
  classificacao = form.classificacao.value.toUpperCase();
  cartaz = form.cartaz.value.toUpperCase();
  sinopse = form.sinopse.value.toUpperCase();

  if (classificacao == "TODOS") classificacao = "";
  if (cartaz == "TODOS") cartaz = "";

  for (var i = 1; i < linha.length; i++) {
    mostrar = true;
    if (nome) {
      campo = linha[i].getElementsByTagName("td")[1];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(nome)) {
        mostrar = false;
      }
    }

    if (genero) {
      campo = linha[i].getElementsByTagName("td")[3];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(genero)) {
        mostrar = false;
      }
    }

    if (classificacao) {
      campo = linha[i].getElementsByTagName("td")[4];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(classificacao)) {
        mostrar = false;
      }
    }

    if (cartaz) {
      campo = linha[i].getElementsByTagName("td")[5];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(cartaz)) {
        mostrar = false;
      }
    }

    if (sinopse) {
      campo = linha[i].getElementsByTagName("td")[6];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(sinopse)) {
        mostrar = false;
      }
    }

    if (mostrar) {
      linha[i].style.display = "";
    } else {
      linha[i].style.display = "none";
    }
  }
}
