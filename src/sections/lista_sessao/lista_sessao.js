
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function asd(){
  await sleep(2000);
  console.log('2000awek');
  if (document.getElementById('lista_sessao')){
    const div = document.createElement('div');

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
        for(var g = 0;g < 20 ;g++){
          conteudo +=`
        <tr>
            <td>A Fuga Das Galinhas</td>
            <td>14:30</td>
            <td>2:10</td>
            <td>Portugues</td>
            <td>2D</td>
            <td>12</td>
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


  
  
    console.log('123333');
  function removeRow(input) {
    document.getElementsByClassName('lista_sessao').removeChild(input.parentNode);
  }
