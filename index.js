import validator from './validator.js';

document.getElementById("val").addEventListener("click", validar);

function validar() {
  const number = document.getElementById("registro").value;
  const ocult = validator.maskify(number);
  const mrc = number.slice(0, 1);

  if (number.length < 16){
    document.getElementById("registro").value=ocult;
    alert("Este número es demasiado corto. Por favor, inserta un número válido.")
    document.getElementById('validation').style.display = 'flex';
    document.getElementById('validMark').style.display = 'none';
    document.getElementById('invalidMark').style.display = 'none';
  }

  if (number.length === 16){
    document.getElementById("registro").value=ocult;
    const resultado = validator.isValid(number);
    if (resultado === false){
      document.getElementById('validation').style.display = 'none';
      document.getElementById('validMark').style.display = 'none';
      document.getElementById('invalidMark').style.display = 'flex';
    }
    if (resultado === true){
      document.getElementById('validation').style.display = 'none';
      document.getElementById('invalidMark').style.display = 'none';
      document.getElementById('validMark').style.display = 'flex';
    }

    if(mrc === "4"){
      document.getElementById('visa').style.display = 'flex';
      document.getElementById('master').style.display = 'none';
    }
    if(mrc === "5"){
      document.getElementById('visa').style.display = 'none';
      document.getElementById('master').style.display = 'flex';
    }
  }
}













