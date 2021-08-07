var modal = document.getElementById("login");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function logar(user, senha) {
  const obj = {
    usuario: user,
    senha: senha,
  };
  ajax.open("post", "http://localhost/login", true);
  ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  ajax.send(JSON.stringify(obj));

  ajax.onreadystatechange = function () {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = JSON.parse(ajax.responseText);

      if (data[0].cod == 1) {
        document.getElementsByName("senha")[0].value = "";
        document.getElementsByName("user")[0].value = "";
        document.getElementsByName("user")[0].placeholder = "Usuário errado";
        document.getElementsByName("user")[0].style.setProperty("--c", "red");
        return;
      }
      if (data[0].cod == 2) {
        document.getElementsByName("senha")[0].value = "";
        document.getElementsByName("senha")[0].placeholder = "Senha errada";
        document.getElementsByName("senha")[0].style.setProperty("--c", "red");
        return;
      }
      if (data[0].cod == 0) {
        sessionStorage.setItem("user", data[0].usuario);
        sessionStorage.setItem("nome", data[0].nome);
        sessionStorage.setItem("adm", data[0].adm);
        location.reload();
        return;
      }
    }
  };
}
