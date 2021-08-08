function CalcularMediaAritmetica(lista) {
    /*let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;            
        }
    );



    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}





function calculaMitdadLista(lista){
    return  parseInt(lista.length / 2);

}

function esPar(nummero){
    if(nummero % 2 ===0){
        return true
    }
    else{
        return false;
    }
}

function ordenar(listaD) {
    let listaO = listaD;
    let paso = 0;
    for (let i = 0; i <= listaO.length; i++) {
      for (let j = 0; j < listaO.length; j++) {
        if (listaO[j] > listaO[j + 1]) {
          paso = listaO[j];
          listaO[j] = listaO[j + 1];
          listaO[j + 1] = paso;
        }
      }
    }
    return listaO;
  }


function calculaMediana(lista)
{
    let mediana;

    lista = ordenar(lista);
    

    if (esPar(lista.length)){
        const elemento1 = lista[calculaMitdadLista(lista)];
        const elemento2 = lista[calculaMitdadLista(lista) - 1];
        
        const promedioElemento1y2 = CalcularMediaAritmetica([elemento1,elemento2]);
    
        return mediana = promedioElemento1y2;
    
    }
    else{
        
        return mediana= lista[calculaMitdadLista(lista)];
    
    }


}


