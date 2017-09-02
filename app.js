(function(){

  $("input").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $('.testar').focus();
    }
  });

  $('.testar').click(function(){
    var cpf = $('#verificaCpf').val();
    console.log(verifica(cpf));
  });

  function verifica(cpf) {
    var total1 = 0;
    var total2 = 0;
    var multiplicador = 10;
    var multiplicador2 = 11;
    var cpfClean = cpf.replace(/\D/g, '');
    var cpfArray  = cpfClean.split('');
    var cpfArray2 = cpfClean.split('');
    cpfArray2.push(cpfArray[6]);
    for(var i = 0; i < cpfArray.length; i++){
      total1 += cpfArray[i]*multiplicador;
        if(multiplicador === 2) {
          break;
        }
      multiplicador--;
    }
    for(var i = 0; i < cpfArray2.length; i++){
      total2 += cpfArray2[i]*multiplicador2;
        if(multiplicador2 === 2) {
          break;
        }
      multiplicador2--;
    }
    var dig1 = ((total1*10)%11) === 10 ?  0 : ((total1*10)%11);
    var dig2 = ((total2*10)%11) === 10 ?  0 : ((total2*10)%11);
    var verifyDig1 = (dig1.toString() === cpfArray[9]); 
    var verifyDig2 = (dig2.toString() === cpfArray[10]);
    var verificador = cpfArray.every(function(item){
      return item === cpfArray[0]
    });
    if(verificador) {
      $('.alerta').addClass( "alert-danger");
      $('.texto').text('CPF inválido!');
    } else {
      if(verifyDig1 && verifyDig2) {
        $('.alerta').removeClass( "alert-danger");
        $('.alerta').addClass( "alert-success");
        $('.texto').text('CPF válido!');
        return
        } else {
          $('.alerta').removeClass( "alert-success");
          $('.alerta').addClass( "alert-danger");
          $('.texto').text('CPF inválido!');
          return
        }
      }
  }
})();