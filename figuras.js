//codigo del cudrado
console.group("Cuadrados");
const ladoCuadrado = 5 ;

console.log("Los lados del cuadrado mide: "+ ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("el perímetro del cuadrado es : "+ perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("el área  del cuadrado es : "+ areaCuadrado + "cm°2");

console.groupEnd();
//codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "los lados del triangulo miden  : "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;

console.log("la altura del triángulo es de: "+ alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;


console.log("el perímetro del triángulo es : "+ perimetroTriangulo +"cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("el área  del triángulo es : "+ areaTriangulo + "cm°2");

console.groupEnd();

//codigo del circulo
console.group("Triangulos");

//radio
const radioCirculo =4;

console.log("el radio del circulo es : "+ radioCirculo +"cm");

//diametro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es : "+ diametroCirculo +"cm");

//PI
const PI = Math.PI;
console.log("PI es : "+ PI);

//circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("la circunferencia del circulo es : "+ perimetroCirculo +"cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("el áre del circulo es : "+ areaCirculo +"cm2");


console.groupEnd();