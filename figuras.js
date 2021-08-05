//codigo del cudrado
console.group("Cuadrados");

//const ladoCuadrado = 5 ;
//console.log("Los lados del cuadrado mide: "+ ladoCuadrado +"cm");

function perimetroCuadrado(lado){

    return lado * 4;
}

//console.log("el perímetro del cuadrado es : "+ perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;

} 

//console.log("el área  del cuadrado es : "+ areaCuadrado + "cm°2");

console.groupEnd();
//codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2,base ){
    return lado1 + lado2 + base;

} 

function areaTriangulo(base, altura){
    return  (base * altura) / 2;
} 


console.groupEnd();

//codigo del circulo
console.group("circulo");

//radio
const radioCirculo =4;

console.log("el radio del circulo es : "+ radioCirculo +"cm");

//diametro
function diametroCirculo(radio){
    return radio * 2;
} 


//PI
const PI = Math.PI;
console.log("PI es : "+ PI);

//circunferencia 
function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return  diametro * PI;
}  


//area
function areaCirculo (radioCirculo){
    return   (radioCirculo * radioCirculo) * PI;
} 


console.groupEnd();

//interactuamos con html
function calcularPerimetroCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);

    alert(area);

}