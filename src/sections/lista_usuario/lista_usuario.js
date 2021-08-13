  async function listarUsuarios() {
    
    console.log()
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
            
              <table class="center">
                  <tr>
                      <th>&nbsp Nome &nbsp</th>
                      <th>&nbsp Usuario &nbsp</th> 
                      <th>&nbsp ADM &nbsp</th>
                  </tr>`;
          for (var g = 0; g < resposta.length; g++) {
            conteudo +=
              `
                  <tr>
                      <td>`  +
              resposta[g].nome +
              `</td>
                      <td>` +
              resposta[g].usuario +
              `</td>
                      <td>` +
              resposta[g].adm +
              `</td>
                  </tr>
                  `;
          }
          conteudo += `
              </table>
            `;
          div.innerHTML = conteudo;
          document.getElementById("listaUsuario").innerHTML="";
          document.getElementById("listaUsuario").appendChild(div);
        }
      };
    }
  }