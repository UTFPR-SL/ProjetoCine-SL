var ajax = new XMLHttpRequest();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onload = async function () {
  await sleep(100);
  var page = window.location.href.split("/");

  if (sessionStorage.getItem("user")) {
    document.getElementsByClassName("logged")[0].style.display = "block";
    document.getElementById(
      "ReLogin"
    ).innerText = `Bem Vindo, ${sessionStorage.getItem("nome")}!`;
    document.getElementsByClassName("logged")[1].style.display = "block";
    if (page[page.length - 2] == "home")
      document.getElementsByClassName("unlogged")[0].style.display = "none";
  }

  if (page[page.length - 2] == "adm") {
    if (sessionStorage.getItem("adm") != 1) {
      alert("Você não tem acesso a esta pagina!");
      window.location.href = "../../paginas/home/home.html";
    }
    botoesSessoes();
  }

  if (page[page.length - 2] == "home") {
    sessoesDisponiveis();
  }
};
