function myFunction(id) {
    var element = document.getElementById(id);
    element.classList.toggle("selecionado");
 }

//  function compra(id_vendedor,cliente,cpf,id_sessao,qtd_ingressos,valor,){
//             const obj = {
//                 id_vendedor: id_vendedor,
//                 cliente: cliente,
//                 cpf: cpf,
//                 id_sessao: id_sessao,
//                 qtd_ingressos:qtd_ingressos,
//                 valor:valor
//             };
        
//             console.log(obj);

//     ajax.open("post", "http://localhost/compraDosIngressos", true);
//     ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     ajax.send(JSON.stringify(obj));
//     ajax.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         var data = ajax.responseText;
//         console.log(data);
//         alert(data);
//         if(data == 'Usuário adicionado com sucesso!')location.reload();
//       }
//     };
//   }

