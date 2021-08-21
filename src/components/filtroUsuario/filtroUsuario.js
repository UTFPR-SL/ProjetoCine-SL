 
function filtrarUsuarios(form) {
    var mostrar;
    linha = document.getElementById("tabelaListaUsuarios").getElementsByTagName("tr");
  
    nome = form.nome.value.toUpperCase();
    usuario = form.usuario.value.toUpperCase();
    adm = form.adm.value.toUpperCase();
  
    if (adm == "TODOS") adm = "";
  
    for (var i = 1; i < linha.length; i++) {
      mostrar = true;
      if (nome) {
        campo = linha[i].getElementsByTagName("td")[0];
        txtValue = campo.textContent || campo.innerText;
  
        if (!txtValue.toUpperCase().includes(nome)) {
          mostrar = false;
        }
      }
  
      if (usuario) {
        campo = linha[i].getElementsByTagName("td")[1];
        txtValue = campo.textContent || campo.innerText;
  
        if (!txtValue.toUpperCase().includes(usuario)) {
          mostrar = false;
        }
      }
  
      if (adm) {
        campo = linha[i].getElementsByTagName("td")[2];
        txtValue = campo.textContent || campo.innerText;
  
        if (!txtValue.toUpperCase().includes(adm)) {
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
  