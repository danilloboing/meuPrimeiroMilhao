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

  document.querySelector('#resultado').value = months
});
