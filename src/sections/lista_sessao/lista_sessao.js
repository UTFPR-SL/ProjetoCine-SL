async function listarSessoes() {
  if (document.getElementById("lista_sessao")) {
    ajax.open("GET", "http://localhost/listarSessoes", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        // Retorno do Ajax
        var resposta = JSON.parse(this.responseText);

        document.getElementById("listaSessoes").innerText = '';
        console.log(resposta);
        const div = document.createElement("div");
        // div.className = 'rowwww';
        var conteudo = `
          
            <table class="center">
                <tr>
                    <th>&nbsp Cartaz &nbsp</th>
                    <th>&nbsp Nome &nbsp</th>
                    <th>&nbsp Horario &nbsp</th>
                    <th>&nbsp Duracao &nbsp</th>
                    <th>&nbsp Idioma &nbsp</th>
                    <th>&nbsp&nbsp 3D &nbsp &nbsp</th>
                    <th>Classificação Indicativa</th>
                </tr>`;
        for (var g = 0; g < resposta.length; g++) {
          if (resposta[g].e3d == true) {
            var e3d = "3D";
          } else {
            var e3d = "2D";
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
                </tr>
                `;
        }
        conteudo += `
            </table>
          `;
        div.innerHTML = conteudo;
        document.getElementById("listaSessoes").appendChild(div);
      }
    };
  }
}
