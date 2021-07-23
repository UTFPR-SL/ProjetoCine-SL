function criarSessao(filme,horario,tresd,idioma,sala){
  var form = document.getElementById("sessao");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Sessão Criada")
  });

  var myData = "["+filme+","+horario+","+tresd+","+idioma+","+sala+"]";
  console.log(myData);
  ajax.open("post", "http://localhost/test", true);
  ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  ajax.send(JSON.stringify(myData));
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
                    var data = ajax.responseText;
                // Retorno do Ajax
              console.log(data);
              var resposta = JSON.parse(this.responseText);
            //   resposta = data;
              document.getElementById("teste").innerText = resposta[5].cod;
          }
      }
    }