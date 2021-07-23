 
function loginADM(){
    var login;
    login = prompt("Entre com a senha de ADM");

    if(login == null) return;
    else if(login == "admin")    window.location.href = "../../paginas/adm/adm.html"
    else alert("Senha errada!");
};

window.onload = function(){
    console.log("asdadsadsad");
}