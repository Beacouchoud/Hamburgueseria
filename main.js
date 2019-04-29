var productos = [];
var precios = [];
function seleccionarProducto(num) {
    nom = document.getElementsByTagName("button")[num].innerText;
    precio = document.getElementsByTagName("button")[num].value;
    cantidad = prompt("¿Cuantas unidades de " + nom + " quieres añadir al pedido?");
    prod = cantidad+"x"+nom + "......" + Number(cantidad*precio)+"€";
    productos.push(prod);
    preciop = Number(cantidad*precio);
    precios.push(preciop);
}

function preciosSinIVA() {
    total = 0;
    for (x=0;x<precios.length;x++){
        total = total + Number(precios[x]);
    }
    return Number(total);
}

function precioIVA() {
    precioIVA = (preciosSinIVA()*0.21) + preciosSinIVA();
    return Number(precioIVA);
}

function confirmar() {
    if (productos.length > 0) {
    mesa = document.getElementById("mesa").value;
    numPedido = Math.random()*10000;
    factura="Factura: \n" + "Nº de pedido: " + Math.floor(numPedido) + "\n" + "Mesa: " + mesa +"\n";

    for (x=0;x<productos.length;x++){
        factura=factura + (productos[x]+"\n");
    }

    factura = factura + "Precio...."+ preciosSinIVA() +"\nPRECIO FINAL....."+precioIVA();

    alert(factura);
    } else {
        alert("No se ha seleccionado ningun producto");
    }
}

