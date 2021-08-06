var ajax = new XMLHttpRequest();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

  window.onload = async function() {
    await sleep(100);
    var page = window.location.href.split('/');
    document.getElementById('login').style.display='block';
    
    if(page[page.length-2] == "adm"){
        limparTelaADM();
        botoesFilmes();
    }

  if (page[page.length - 2] == "home") {
    listarSessoes();
  }
};





// console.log("asd");
// console.log(sessionStorage.getItem("teste"));
// console.log("123");
// console.log("asd");
// console.log(sessionStorage.getItem("teste"));
// sessionStorage.setItem("teste", "testadasso!!!");
// console.log(sessionStorage.getItem("teste"));
// console.log("234");




function test() {
  alert("Agr vai");

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(data);
    }
  };
  var myData = [
    {
      usuario: "Bill",
      nome: "billie",
      senha: "asd",
      adm: false,
    },
  ];
  console.log(myData);
  ajax.open("post", "http://localhost/test", true);
  ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  ajax.send(JSON.stringify(myData));

  ajax.onreadystatechange = function () {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = ajax.responseText;

      // Retorno do Ajax
      console.log(data);
      var resposta = JSON.parse(this.responseText);
      //   resposta = data;
      document.getElementById("teste").innerText = resposta[5].cod;
    }
  };
}

function sel() {
  alert("Agr vai");

  // var resposta;

  ajax.open("GET", "http://localhost/select", true);
  ajax.send();

  ajax.onreadystatechange = function () {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = ajax.responseText;

      // Retorno do Ajax
      console.log(data);
      var resposta = JSON.parse(this.responseText);
      //   resposta = data;
      document.getElementById("teste").innerText = resposta[5].cod;
    }
  };
}
