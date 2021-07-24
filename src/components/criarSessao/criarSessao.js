function criarSessao(filme, horario, e3d, idioma, sala) {
  var form = document.getElementById("sessao");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  var msg;
  msg =
    `você tem certeza que deseja adicionar a Sessão?\n
    Filme: ` +
    filme +
    `\n
    horario: ` +
    horario +
    `\n
    3D: ` +
    e3d +
    `\n
    Idioma: ` +
    idioma +
    `\n
    Sala: ` +
    sala;
  if (confirm(msg)) {
    const obj = {
      filme: filme,
      horario: horario,
      e3d: e3d,
      idioma: idioma,
      sala: sala,
    };

    ajax.open("post", "http://localhost/criarSessao", true);
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
