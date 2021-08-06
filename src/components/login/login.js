var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function logar(user, senha){

    const obj = {
        usuario: user,
        senha: senha
      };

    ajax.open("GET", "http://localhost/login", true);
    ajax.send(JSON.stringify(obj));


    ajax.onreadystatechange = function () {
      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {
        var data = ajax.responseText;

        console.log(data);

      }
    }

    var tst = document.getElementsByName('user');
    console.log(tst[0].value);
}