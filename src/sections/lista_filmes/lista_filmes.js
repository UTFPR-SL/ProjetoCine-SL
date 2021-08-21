 
async function filmesdaLista() {
  if (document.getElementById("lista_filmes")) {
    ajax.open("GET", "http://localhost/listarFilmes", true);
    ajax.send();
    console.log();
    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        // Retorno do Ajax
        var resposta = JSON.parse(this.responseText);

        const div = document.createElement("div");
        var conteudo = `
          
            <table id="TabelaListaFilmes" class="center">
                <tr>
                    <th>&nbsp Cartaz &nbsp</th>
                    <th>&nbsp Nome &nbsp</th>
                    <th>&nbsp Duracao &nbsp</th> 
                    <th>&nbsp Gênero &nbsp</th> 
                    <th>Classificação Indicativa</th>
                    <th>Em cartaz</th>
                    <th>Sinopse</th>
                </tr>`;
        for (var g = 0; g < resposta.length; g++) {
          if (resposta[g].cartaz == true) {
            var cartaz = "Em Cartaz";
          } else {
            var cartaz = "Fora de Cartaz";
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
            resposta[g].duracao +
            `</td>
                    <td>` +
            resposta[g].genero +
            `</td>
                    <td>` +
            resposta[g].classificacaoIndicativa +
            `</td>
                    <td>` +
            cartaz +
            `</td>
                    <td>` +
            resposta[g].sinopse.substr(0, 100) +
            `</td>
                </tr>
                `;
        }
        conteudo += `
            </table>
          `;
        div.innerHTML = conteudo;
        document.getElementById("listaFilmes").innerHTML="";
        document.getElementById("listaFilmes").appendChild(div);
      }
    };
  }
}