const validator = {
  
  isValid: (tarjeta) => {
    const length = tarjeta.length;
    let count = 0;
    // asegurarnos que la longitud sea par
    if(length % 2 === 0)
    {
      //Comenzar a duplicar desde el primer número
      for(let i = 0; i < length; i++)
      {
        let dig = parseInt(tarjeta[i]);
        if (i % 2 === 0) // Sólo duplicaremos las posiciones impares
        {
          if ((dig *= 2) > 9) //Condicional si el número es de dos cifras
          {
            //separamos los números como dos variables
            const cifra2 = dig % 10;
            const cifra1 = parseInt(dig / 10);
            // sumamos las cifras
            dig = cifra1 + cifra2;
          }
        }
        count += dig;
      }
    }
    //El resultado debe ser múltiplo de 10
    return (count % 10) === 0;
  },

  maskify: (tarjeta)=> {

    const ult = tarjeta.substring(tarjeta.length - 4);
    const inc = tarjeta.substring(0,tarjeta.length - 4);
    const ocultar = inc.replace(/./g, "#") + ult;
    return ocultar;
  }
}


export default validator;
