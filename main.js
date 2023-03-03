import './style.css'

const formulario = document.getElementById('formulario')


formulario.addEventListener('submit', (event) => {

  event.preventDefault();

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  let input3 = document.getElementById('input3').value;

  let selector1 = document.getElementById('selector1')
  let selector2 = document.getElementById('selector2')
  let selector3 = document.getElementById('selector3')

  let slct1 = selector1.options[selector1.selectedIndex].value
  let slct2 = selector2.options[selector2.selectedIndex].value
  let slct3 = selector3.options[selector3.selectedIndex].value

  document.getElementById('nArea1').innerHTML = slct1; 
  document.getElementById('nArea2').innerHTML = slct2;
  document.getElementById('nArea3').innerHTML = slct3;

  let poblacion = Number(input1) + Number(input2) + Number(input3);

  let result  = input1 * 100 / poblacion;
  let result2 = input2 * 100 / poblacion;
  let result3 = input3 * 100 / poblacion;

  document.getElementById('resultado1').innerHTML = '%' + Math.trunc(result) ;
  document.getElementById('resultado2').innerHTML = '%' + Math.trunc(result2) ;
  document.getElementById('resultado3').innerHTML = '%' + Math.trunc(result3) ;

/*   if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('input', input1);
    document.getElementById('resultado1').innerHTML = localStorage.getItem('input');
  } else {
    document.getElementById('resultado1').innerHTML = 'Lo siento, tu navegador no soporta web storage'
  } */

 


})


totalArintia.addEventListener('click', () => {

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  let input3 = document.getElementById('input3').value;


  let totalPoblacion = Number(input1) + Number(input2) + Number(input3);

  document.getElementById('totalArinta').innerHTML = Math.trunc(totalPoblacion);


})




/* 
btn1.addEventListener('click', () => {

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  let input3 = document.getElementById('input3').value;

  let poblacion = Number(input1) + Number(input2) + Number(input3);
  let result1 = input1 * 100 / poblacion;
  

  document.getElementById('resultado1').innerHTML = Math.trunc(result1);


})

btn2.addEventListener('click', () => {

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  let input3 = document.getElementById('input3').value;

  let poblacion2 = Number(input1) + Number(input2) + Number(input3);
  let result2 = input2 * 100 / poblacion2;

  document.getElementById('resultado2').innerHTML = Math.trunc(result2);


})

btn3.addEventListener('click', () => {

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;  
  let input3 = document.getElementById('input3').value;


  let poblacion3 = Number(input1) + Number(input2) + Number(input3);
  let result3 = input3 * 100 / poblacion3;
 

  document.getElementById('resultado3').innerHTML = Math.trunc(result3);

})
 */