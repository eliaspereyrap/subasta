// En una subasta de 4 personas y 10 productos hay que:

// Crear sistema que registre los precios por los que se pujó cada producto antes de venderlo.
// Resgistrar quíén se llevó cada producto, cúantos productos lleva comprados, y el precio que pagó por cada uno.
// Establecer precio de inicio y precio mínimo por el que se tiene que vender cada producto.

class Producto {
    constructor(producto, precioDeInicio, precioMinimoDeVenta,) {
        this.producto = producto
        this.precioDeInicio = precioDeInicio
        this.precioMinimoDeVenta = precioMinimoDeVenta
        this.preciosQueTuvo = []
        this.precioAlQueSeVendio
    }
}

class Pujante {
    constructor(nombre) {
        this.nombre = nombre
        this.dinero = 5000
        this.productosQueTiene = []
        this.productoAPrecio = new Map()
    }
}

const heladera = new Producto("Heladera", 350, 900)
const cocina = new Producto("Cocina", 300, 950)
const microondas = new Producto("Microondas", 100, 1575)
const mesa = new Producto("Mesa", 360, 2475)
const sillon = new Producto("Sillón", 800, 1200)
const mesitaDeLuz = new Producto("Mesita de luz", 90, 1350)
const cama = new Producto("Cama", 1300, 2000)
const ropero = new Producto("Ropero", 1800, 2600)
const escritorio = new Producto("Escritorio", 900, 1950)
const lavavajillas = new Producto("Lavavajillas", 780, 3220)
const productos = [heladera, cocina, microondas, mesa, sillon, mesitaDeLuz, cama, ropero, escritorio, lavavajillas]

const pujante1 = new Pujante("Juan")
const pujante2 = new Pujante("Mabel")
const pujante3 = new Pujante("Felipe")
const pujante4 = new Pujante("Maria")
const pujantes = [pujante1, pujante2, pujante3, pujante4]

function iniciarVenta() {

    // Por cada producto iterar sobre los pujantes, obtener un numero random para ver si pujan o no
    for (let producto of productos) {

        for (let pujante of pujantes) {

            let puja = Math.round(Math.random());
            let vendido;

            if (puja) vendido = pujar(pujante, producto);

            // Si el producto se vende, dejar de buscar alguien que lo compre terminando el for anidado
            if (vendido) break
        }
    }
}

function pujar(pujante, producto) {

    if (pujante.dinero < producto.precioDeInicio) return false;

    let precioQuePropone = Math.round(Math.random() * (pujante.dinero - producto.precioDeInicio) + producto.precioDeInicio);

    if (precioQuePropone < producto.precioMinimoDeVenta) {
        producto.preciosQueTuvo.push(precioQuePropone);
        return false
    }

    // Cuando el precio ya es superior

    pujante.dinero -= precioQuePropone;
    pujante.productosQueTiene.push(producto.producto);
    pujante.productoAPrecio.set(producto.producto, precioQuePropone);

    producto.precioAlQueSeVendio = precioQuePropone;
    return true
}

iniciarVenta()
console.log(pujantes, productos)
