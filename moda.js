const lista = [1,2,3,3,1,4,4,5];

const lista1Count = {};

lista.map(function(elemento){
    if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
    }else{
        lista1Count[elemento] = 1;
    }
    
});

const listaArray = Object.entries(lista1Count).sort(
    function(valorAcumulado,nuevoValor){
        valorAcumulado - nuevoValor
});

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];
