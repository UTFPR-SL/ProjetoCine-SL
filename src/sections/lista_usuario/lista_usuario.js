async function listarUsuarios() {
  console.log();
  if (document.getElementById("lista_usuario")) {
    ajax.open("GET", "http://localhost/usuarios", true);
    ajax.send();
    console.log();
    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        // Retorno do Ajax
        var resposta = JSON.parse(this.responseText);

        const div = document.createElement("div");
        var conteudo = `
            
              <table id="tabelaListaUsuarios" class="center">
                  <tr>
                      <th>&nbsp Nome &nbsp</th>
                      <th>&nbsp Usuario &nbsp</th> 
                      <th>&nbsp ADM &nbsp</th>
                  </tr>`;

        for (var g = 0; g < resposta.length; g++) {
          if (resposta[g].adm == true) {
            var adm = "✔️";
          } else {
            var adm = "❌";
          }
          conteudo +=
            `<tr>
                      <td>` +
            resposta[g].nome +
            `</td>
                      <td>` +
            resposta[g].usuario +
            `</td>
                      <td id='status${resposta[g].id}'>` +
            adm +
            `&nbsp <i class="bi bi-arrow-repeat" onclick="attUsuario(${resposta[g].id}, status${resposta[g].id}.innerHTML)" ></i> </td>
                  </tr>
                  `;
        }
        conteudo += `
              </table>
            `;
        div.innerHTML = conteudo;
        document.getElementById("listaUsuario").innerHTML = "";
        document.getElementById("listaUsuario").appendChild(div);
      }
    };
  }
}

function attUsuario(id, texto) {
  ajax.open("PUT", "http://localhost/attADMUsuario/" + id, true);
  ajax.send();
  ajax.onreadystatechange = function () {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
      // Retorno do Ajax
      var resposta = JSON.parse(this.responseText);

      if (resposta.cod != 1) {
        alert(resposta.msg);
      } else {
        if (resposta.status == true)
          document.getElementById(`status${id}`).innerHTML =
            "✔️" + texto.substr(1);
        else {
          document.getElementById(`status${id}`).innerHTML =
            "❌" + texto.substr(1);
        }
      }
    }
  };
}
