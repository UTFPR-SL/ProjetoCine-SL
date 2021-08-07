var ajax = new XMLHttpRequest();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onload = async function () {
  await sleep(100);
  var page = window.location.href.split("/");

  if (sessionStorage.getItem("user") == null) {
    document.getElementsByClassName("logged")[0].style.display = "none";
    document.getElementsByClassName("logged")[1].style.display = "none";
  } else {
    document.getElementsByClassName("logged")[0].style.display = "block";
    document.getElementsByClassName(
      "logged"
    )[0].innerHTML = `<a class="nav-link textoItens">Bem Vindo, ${sessionStorage.getItem(
      "nome"
    )}!</a>`;
    document.getElementsByClassName("logged")[1].style.display = "block";
  }

  if (page[page.length - 2] == "adm") {
    if (sessionStorage.getItem("adm") != 1) {
      alert("Você não tem acesso a esta pagina!");
      window.location.href = "../../paginas/home/home.html";
    }

    limparTelaADM();
    botoesFilmes();
  }

  if (page[page.length - 2] == "home") {
    listarSessoes();
  }
};
