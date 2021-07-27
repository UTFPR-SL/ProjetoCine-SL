function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  window.onload = async function (){
    await sleep(500);
    listarFilmes();
  };
// Não mexer!
// Imports Necessários

$.getScript('../../settings/sectionsImports.js', function() {}); 
$.getScript('../../settings/componentsImports.js', function() {}); 



// Imports dos components e sections


$.getScript('../../sections/header/header.js', function() {}); 
$.getScript('../../sections/footer/footer.js', function() {}); 
$.getScript('../../paginas/home/home.js', function() {}); 
$.getScript('../../paginas/adm/adm.js', function() {}); 
$.getScript('../../components/botoesADM/botoesADM.js', function() {}); 
$.getScript('../../components/criarSessao/criarSessao.js', function() {}); 
