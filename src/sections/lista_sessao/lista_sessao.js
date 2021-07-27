
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




window.onload = async function asd(){
  await sleep(2000);
  console.log('2000awek');
  if (document.getElementById('lista_sessao')){
    ajax.open("GET", "http://localhost/listarSessoes", true);
    ajax.send();

      ajax.onreadystatechange = function() {

      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
 
        // Retorno do Ajax
            var resposta = JSON.parse(this.responseText);

            const div = document.createElement('div');
            console.log(resposta.length)
          // div.className = 'rowwww';
          var conteudo =`
          
            <table class="center">
                <tr>
                    <th>&nbsp nome &nbsp</th>
                    <th>&nbsp horario &nbsp</th>
                    <th>&nbsp duracao &nbsp</th>
                    <th>&nbsp idioma &nbsp</th>
                    <th>&nbsp&nbsp 3d &nbsp &nbsp</th>
                    <th>classificacao Indicativa</th>
                </tr>`;
                for(var g = 0;g < resposta.length ;g++){
                  if (resposta[g].e3d == true){
                    var e3d = '3D';
                  }else{
                    var e3d = '2D';
                  }
                  conteudo +=`
                <tr>
                    <td>`+resposta[g].nome+`</td>
                    <td>`+resposta[g].horario+`</td>
                    <td>`+resposta[g].duracao+`</td>
                    <td>`+resposta[g].idioma+`</td>
                    <td>`+e3d+`</td>
                    <td>`+resposta[g].classificacaoIndicativa+`</td>
                </tr>
                `;
                }
                conteudo +=`
            </table>
          `;
           div.innerHTML=conteudo;
          document.getElementById('teste').appendChild(div);
        }
    }
  }
}
