
async function addLogin(nome, usuario, senha, adm) {
    var msg;
  msg =
    `Confirmar cadastro\n
    Nome: ` +
    nome +
    `\n
    Login: ` +
    usuario +
    `\n
    ADM: ` +
    adm
    ;

    if (confirm(msg)) {
        const obj = {
          nome: nome,
          usuario: usuario,
          senha: senha,
          adm: adm
        };
    
        console.log(obj);
    
        ajax.open("post", "http://localhost/addUsuario", true);
        ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        ajax.send(JSON.stringify(obj));
        ajax.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var data = ajax.responseText;
            console.log(data);
            alert(data);
            if(data == 'Usuário adicionado com sucesso!')location.reload();
          }
        };
      }
    }