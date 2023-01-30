var result = 0;
var months = 0;
const resultado = months
var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(event) {
  event.preventDefault();

    var form = document.querySelector("#form-calculo");
    var aporteMensal = document.querySelector('#aporteMensal').value;
    var jurosAnual = document.querySelector('#jurosAnual').value;
  if (isNaN(aporteMensal) || aporteMensal <= 0) {
            alert('Preço deve ser um número maior que zero');
            return; 
        }
        if (isNaN(jurosAnual) || jurosAnual < 0) {
            alert('O juros deve ser um número maior que zero');
            return;
        }
        while (result < 1000000) {
          var juros = (jurosAnual / 100) / 12
          result = (result + aporteMensal) * (juros);
          months++;
        }
        console.log (months)
        document.getElementById("resultado").innerHTML = "Considerando seu aporte mensal e juros anual, você alcançará seu primeiro milhão em " + months + " meses."
      })