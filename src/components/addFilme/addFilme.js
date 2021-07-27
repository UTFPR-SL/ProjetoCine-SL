async function addFilme(nome, cartaz, tempo, classificacao, genero, sinopse) {
    
  var duracao = tempo.split(":")[0] + "h " + tempo.split(":")[1] + "min";
  var msg;
  msg =
    `Você tem certeza que deseja adicionar o Fiome?\n
    Filme: ` +
    nome +
    `\n
    duração: ` +
    duracao +
    `\n
    Genero: ` +
    genero +
    `\n
    Classificação Indicativa: ` +
    classificacao +
    `\n
    Sinopse: ` +
    sinopse.substring(0, 128);

  if (confirm(msg)) {
    const obj = {
      nome: nome,
      cartazURL: cartaz,
      duracao: duracao,
      classificacaoIndicativa: classificacao,
      genero: genero,
      sinopse: sinopse,
    };

    console.log(obj);

    ajax.open("post", "http://localhost/addFilme", true);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(obj));
    ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = ajax.responseText;
        console.log(data);
        alert(data);
      }
    };
  }
}
