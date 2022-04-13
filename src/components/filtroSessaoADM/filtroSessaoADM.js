function filtrarSessaoADM(form) {
  var mostrar;
  linha = document
    .getElementById("tabelaListaSessao")
    .getElementsByTagName("tr");

  nome = form.nome.value.toUpperCase();
  genero = form.genero.value.toUpperCase();
  idioma = form.idioma.value.toUpperCase();
  e3d = form.e3d.value.toUpperCase();
  classificacao = form.classificacao.value.toUpperCase();
  disponivel = form.disponivel.value.toUpperCase();
  sala = form.sala.value;
  lugaresMin = form.lugaresMin.value;
  lugaresMax = form.lugaresMax.value;
  sinopse = form.sinopse.value.toUpperCase();
  
  if (idioma == "TODOS") idioma = "";
  if (e3d == "TODOS") e3d = "";
  if (classificacao == "TODOS") classificacao = "";
  if (disponivel == "TODOS") disponivel = "";
  if (lugaresMin == "") lugaresMin = 0;
  if (lugaresMax == "") lugaresMax = 30;

  form.lugaresMin.max = lugaresMax;
  form.lugaresMax.min = lugaresMin;

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
      campo = linha[i].getElementsByTagName("td")[2];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(genero)) {
        mostrar = false;
      }
    }

    if (idioma) {
      campo = linha[i].getElementsByTagName("td")[5];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(idioma)) {
        mostrar = false;
      }
    }

    if (e3d) {
      campo = linha[i].getElementsByTagName("td")[6];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(e3d)) {
        mostrar = false;
      }
    }

    if (classificacao) {
      campo = linha[i].getElementsByTagName("td")[7];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(classificacao)) {
        mostrar = false;
      }
    }

    if (disponivel) {
      campo = linha[i].getElementsByTagName("td")[8];
      txtValue = campo.textContent || campo.innerText;

      if (txtValue.toUpperCase() != disponivel) {
        mostrar = false;
      }
    }

    if (sala) {
      campo = linha[i].getElementsByTagName("td")[9];
      txtValue = campo.textContent || campo.innerText;

      if (!txtValue.toUpperCase().includes(sala)) {
        mostrar = false;
      }
    }

    if (lugaresMin) {
      campo = linha[i].getElementsByTagName("td")[10];
      txtValue = campo.textContent || campo.innerText;

      if (parseInt(txtValue, 10) < lugaresMin) {
        mostrar = false;
      }
    }

    if (lugaresMax) {
      campo = linha[i].getElementsByTagName("td")[10];
      txtValue = campo.textContent || campo.innerText;

      if (parseInt(txtValue, 10) > lugaresMax) {
        mostrar = false;
      }
    }


    if (sinopse) {
      campo = linha[i].getElementsByTagName("td")[11];
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
