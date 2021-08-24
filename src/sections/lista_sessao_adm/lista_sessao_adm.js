async function listarSessoesADM() {
  if (document.getElementById("lista_sessao_adm")) {
    ajax.open("GET", "http://localhost/listarSessoes", true);
    ajax.send();
    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        // Retorno do Ajax
        var resposta = JSON.parse(this.responseText);

        document.getElementById("listaSessoesADM").innerText = "";
        const div = document.createElement("div");
        // div.className = 'rowwww';
        var conteudo = `
            
              <table id="tabelaListaSessao" class="center">
                  <tr>
                      <th>&nbsp Cartaz &nbsp</th>
                      <th>&nbsp Nome &nbsp</th>
                      <th>&nbsp Gênero &nbsp</th>
                      <th>&nbsp Horario &nbsp</th>
                      <th>&nbsp Duracao &nbsp</th>
                      <th>&nbsp Idioma &nbsp</th>
                      <th>&nbsp&nbsp 3D &nbsp &nbsp</th>
                      <th>Classificação Indicativa</th>
                      <th>Disponível</th>
                      <th>Sala</th>
                      <th>Lugares</th>
                      <th>Sinopse</th>
                  </tr>`;
        for (var g = 0; g < resposta.length; g++) {
          if (resposta[g].e3d == true) {
            var e3d = "3D";
          } else {
            var e3d = "2D";
          }
          if (resposta[g].status == true) {
            var disponivel = "✔️";
          } else {
            var disponivel = "❌";
          }
          conteudo +=
            `
                  <tr>
                      <td><img class="cartaz" src="` +
            resposta[g].cartazURL +
            `"></td>
              <td>` +
            resposta[g].nome +
            `</td>
                      <td>` +
            resposta[g].genero +
            `</td>
                      <td>` +
            resposta[g].horario +
            `</td>
                      <td>` +
            resposta[g].duracao +
            `</td>
                      <td>` +
            resposta[g].idioma +
            `</td>
                      <td>` +
            e3d +
            `</td>
                      <td>` +
            resposta[g].classificacaoIndicativa +
            `</td>
                      <td id='sessao${resposta[g].id}'>` +
            disponivel +
            `&nbsp <i class="bi bi-arrow-repeat" onclick="attSessao(${resposta[g].id}, sessao${resposta[g].id}.innerHTML)" ></i> </td>
                      <td>` +
            resposta[g].sala +
            `</td>
                      <td>` +
            resposta[g].qtd_lugares +
            `<td><div class="myDIV">Ver Sinopse</div><div class="hide">` +
            resposta[g].sinopse +
            //.substr(0, 100)
            `</div></td>
                </tr>
                  `;
        }
        conteudo += `
              </table>
            `;
        div.innerHTML = conteudo;
        document.getElementById("listaSessoesADM").appendChild(div);
      }
    };
  }
}

function attSessao(id, texto) {
  ajax.open("PUT", "http://localhost/attStatusSessao/" + id, true);
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
          document.getElementById(`sessao${id}`).innerHTML =
            "✔️" + texto.substr(1);
        else
          document.getElementById(`sessao${id}`).innerHTML =
            "❌" + texto.substr(1);
        if (resposta.filme)
          alert(`${resposta.filme} foi atualizado para Disponível`);
      }
    }
  };
}
