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
      



/* 
document.querySelector('#calcular').addEventListener('click', function(e) {
  e.preventDefault();
  let aporteMensal = parseFloat(document.querySelector('#aporteMensal').value);
  if (isNaN(aporteMensal) || aporteMensal <= 0) {
      alert('Preço deve ser um número maior que zero');
      return; 
  }
  let jurosMensal = parseFloat(document.querySelector('#jurosMensal').value);
  if (isNaN(jurosMensal) || jurosMensal < 0) {
      alert('Entrada deve ser um número maior ou igual a zero');
      return;
  }
  let result = 0;
  let months = 0;
  while (result < 1000000) {
    result = (result + aporteMensal) * (jurosMensal);
    months++;
  }


});







function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}
*/