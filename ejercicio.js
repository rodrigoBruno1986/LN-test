const data = [3,12,9,10,30,15];

  function Comparar (Array){
      let nuevoArray = [];
    
      for (let i = 0; i < Array.length; i++) {
        
       let resultado = "";

       const data3 = Array[i].toString().indexOf("3");
       const data5 = Array[i].toString().indexOf("5");
       
        
        if (Array[i]%3 === 0 || data3>=0) {
         resultado = resultado+"fizz";
         
       }
        if (Array[i]%5 === 0 || data5>=0) {    
          resultado = resultado+"Buzz";
       }
         
       
       nuevoArray.push(resultado);
      }

    return nuevoArray;
    
  }


console.log(Comparar(data));