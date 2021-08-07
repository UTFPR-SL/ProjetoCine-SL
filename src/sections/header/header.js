function loginADM() {
  if (sessionStorage.getItem("adm") == null) {
    alert("Faça login para continuar");
    document.getElementById("login").style.display = "block";
    return;
  }
  if (sessionStorage.getItem("adm") == 0) {
    alert("Você não tem permissão para acessar essa página!");
    return;
  }
  if (sessionStorage.getItem("adm") == 1) {
    window.location.href = "../../paginas/adm/adm.html";
    return;
  }
}
