const funcion = (...parametros) => {
    const info = parametros.map((parametro, index) => {
      return `Parámetro ${index + 1}: ${parametro}, Tipo: ${typeof parametro}`;
    });
    console.log(info);
  }
  funcion('Hola');
//   funcion(21);
//   funcion(true);
//   funcion([1, 2, 3]);
  
  

   
