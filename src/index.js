import validator from './validator.js';

document.getElementById("val").addEventListener("click", validar);

function validar() {
  const number = document.getElementById("registro").value;
  const ocult = validator.maskify(number);
  if (number.length < 16){
    document.getElementById("registro").value=ocult;
    alert("Este número es demasiado corto. Por favor, inserta un número válido.")
  }
  if (number.length > 16){
    document.getElementById("registro").value=ocult;
    alert("Este número es demasiado largo. Por favor, inserta un número válido.")
  }
  if (number.length === 16){
    document.getElementById("registro").value=ocult;
    const resultado = validator.isValid(number);
    if (resultado === false){
      alert ("Lo siento, el número de tarjeta " + ocult + " no es válido")
    }
    if (resultado === true){
      alert ("El número de tarjeta " + ocult + " es válido. En un momento confirmaremos tu compra.")
    }
  }
}













