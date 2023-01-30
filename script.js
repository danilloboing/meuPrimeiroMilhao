var result = 0;
var months = 0;
var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(event) {
  event.preventDefault();

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
    while (result < 1000000) {
          result = (result + aporteMensal) * (((jurosAnual / 100 ) / 12) + 1);
          months++;
        }
        console.log (months)
        console.log (jurosAnual)
        console.log (result)

        document.getElementById("resultado").innerHTML = "Considerando seu aporte mensal e juros anual, você alcançará seu primeiro milhão em aproximadamente " + months + " meses."
        document.getElementById("alerta-calculo").innerHTML = ""

      })