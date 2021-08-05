const precioOriginal = 100;
const descuento = 15;



function calcularPrecionConDescuento(precio,descuento){
    const porcentajePrecionConDescuento  = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecionConDescuento) / 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount(){
    var inputPrice = document.getElementById("InputPrice");
    var priceValue = inputPrice.value;
    var inputDiscount = document.getElementById("InputDiscount");
    var discountValue = inputDiscount.value;

    var precioConDescuento = calcularPrecionConDescuento(priceValue,discountValue);

    var ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son $" + precioConDescuento;

    

}
