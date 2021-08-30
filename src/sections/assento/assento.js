 async function MostraAssento(id_filme) {
  if (document.getElementById("assento")) {
    console.log(id_filme)
    ajax.open("GET", "http://localhost/infoSessao/"+id_filme, true);
    ajax.send();

    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        // Retorno do Ajax
        var resposta = JSON.parse(this.responseText);

        document.getElementById("ShowAssento").innerText = "";
        const div = document.createElement("div");
        // div.className = 'rowwww';
        var conteudo = `
          
            <table class="center">
                <tr>
                    <th>&nbsp Cartaz &nbsp</th>
                    <th>&nbsp Nome &nbsp</th>
                    <th>&nbsp Gênero &nbsp</th>
                    <th>&nbsp Horário &nbsp</th>
                    <th>&nbsp Duração &nbsp</th>
                    <th>&nbsp Idioma &nbsp</th>
                    <th>&nbsp&nbsp 3D &nbsp &nbsp</th>
                    <th>Classificação Indicativa</th>
                    <th>Sala</th>
                    <th>Sinopse</th>
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
                    <td>` +
            resposta[g].sala +
            `</td>
            <td><div class="myDIV">Ver Sinopse</div><div class="hide">` +
            resposta[g].sinopse +
            //.substr(0, 100)
            `</div></td>
                </tr>
                `;
            break;
        }
        conteudo += `
            </table>
          `;
        div.innerHTML = conteudo;
        document.getElementById("ShowAssento").appendChild(div);
      }
    };
  }
}
