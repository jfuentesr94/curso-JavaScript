const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2===0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
}