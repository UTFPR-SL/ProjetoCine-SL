
var ajax = new XMLHttpRequest();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function asd(){
  
  await sleep(2000);
  alert("asdsadsadasdsad");
    const div = document.createElement('div');

  // div.className = 'rowwww';

  div.innerHTML = `
    <input type="text" name="name" value="" />
    <input type="text" name="value" value="" />
    <label> 
      <input type="checkbox" name="check" value="1" /> Checked? 
    </label>
    <input type="button" value="-" onclick="removeRow(this)" />
  `;

  document.getElementById('teste').appendChild(div);


}


function test(){
    alert("Agr vai");
    
    
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(data);
        }
     };
     var myData = [
        {
            "usuario": "Bill",
            "nome": "billie",
            "senha": "asd",
            "adm": false
        }
        ]
     console.log(myData);
     ajax.open("post", "http://localhost/test", true);
     ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     ajax.send(JSON.stringify(myData));
    
    ajax.onreadystatechange = function() {
  
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
          if (ajax.readyState == 4 && ajax.status == 200) {
          
              var data = ajax.responseText;
              
          // Retorno do Ajax
              console.log(data);
              var resposta = JSON.parse(this.responseText);
            //   resposta = data;
              document.getElementById("teste").innerText = resposta[5].cod;
          }
      }


};

function sel(){
    alert("Agr vai");

    // var resposta;

    ajax.open("GET", "http://localhost/select", true);
    ajax.send();
    
    ajax.onreadystatechange = function() {
  
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
          if (ajax.readyState == 4 && ajax.status == 200) {
          
              var data = ajax.responseText;
              
          // Retorno do Ajax
              console.log(data);
              var resposta = JSON.parse(this.responseText);
            //   resposta = data;
              document.getElementById("teste").innerText = resposta[5].cod;
          }
      }


};