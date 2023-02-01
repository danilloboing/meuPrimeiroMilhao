var months = 0;
var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(event) {
  event.preventDefault();
  
    var balanço = parseFloat(document.querySelector("#valorInicial").value) || 0;
    var aporteMensal = parseFloat(document.querySelector('#aporteMensal').value);
    var jurosAnual = parseFloat(document.querySelector('#jurosAnual').value);


    if (isNaN(aporteMensal) || aporteMensal <= 0) {
      alert('Preço deve ser um número maior que zero');
      return; 
    }
    if (isNaN(jurosAnual) || jurosAnual < 0) {
      alert('O juros deve ser um número maior que zero');
      return;
    }
    while (balanço < 1000000) {
          balanço = (balanço + aporteMensal) * (((jurosAnual / 100 ) / 12) + 1);
          months++;
        }
        console.log (months)
        console.log (jurosAnual)
        console.log (balanço)
        console.log (valorInicial)

        document.getElementById("resultado").innerHTML = "Considerando seu aporte mensal e juros anual, você alcançará seu primeiro milhão em aproximadamente " + months + " meses. <br>Ou " + (months/12).toFixed(1) + " anos."
        document.getElementById("alerta-calculo").innerHTML = "🛈 Este cálculo desconsidera a inflação."

      })

      /* BOTÃO PARA VOLTAR AO INÍCIO */
$(document).ready (function(){
  var divBotao=$('.botaoVoltar');
  var linkBotao=$('.botaoVoltar-Link');

  /* Mostrar botão*/

  $(window).scroll(function(){
      if($(this).scrollTop()>70){
          divBotao.fadeIn();
      }else{
         divBotao.fadeOut(); 
      }

  });

  /* Clicar e voltar ao topo*/

  divBotao.click(function(){

      $('html,body').animate({scrollTop:0},800);

      return false;
  });
});
