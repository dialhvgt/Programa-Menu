// Menú de opciones
function mostrarMenu() {
    let opcion;
    const tipoDeCambioDolar = 7.8; 
    const tipoDeCambioEuro = 8.7;   
    const costoStand = 300;  
    const tasaInteres = 0.02; 

    do {
        opcion = prompt("Seleccione una opción:\n1. Registro de ventas\n2. Conversión de divisas\n3. Cálculo de intereses\n4. Salir");
        
        switch (opcion) {
            case "1":
                // Registro de ventas
                let precio = parseFloat(prompt("Ingrese el precio del producto:"));
                let cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));
                let totalVenta = precio * cantidad;
                alert("El total de la venta es: Q" + totalVenta.toFixed(2));
                break;

            case "2":
                // Conversión de divisas
                let monedaInicial = prompt("Seleccione la moneda inicial: Dólares (USD) o Euros (EUR):").toUpperCase();
                let monto = parseFloat(prompt("Ingrese el monto a convertir:"));
                let resultado;

                if (monedaInicial === "USD") {
                    resultado = monto * tipoDeCambioDolar;
                    alert("El monto en Quetzales es: Q" + resultado.toFixed(2));
                } else if (monedaInicial === "EUR") {
                    resultado = monto * tipoDeCambioEuro;
                    alert("El monto en Quetzales es: Q" + resultado.toFixed(2));
                } else {
                    alert("Moneda no válida. Por favor ingrese USD o EUR.");
                }
                break;

            case "3":
                // Cálculo de intereses
                let diasDeRetraso = parseInt(prompt("Ingrese los días de retraso en la devolución del stand:"));
                let cantidadDeStands = parseInt(prompt("Ingrese la cantidad de stands que solicitó:"));

                if (diasDeRetraso > 2) {
                    let totalAPagar = cantidadDeStands * costoStand;
                    let interes = totalAPagar * tasaInteres * (diasDeRetraso - 2);
                    totalAPagar += interes;
                    alert("El monto a pagar por " + cantidadDeStands + " stands es: Q" + totalAPagar.toFixed(2));
                } else {
                    let totalAPagar = cantidadDeStands * costoStand;
                    alert("El monto a pagar por " + cantidadDeStands + " stands es: Q" + totalAPagar.toFixed(2));
                }
                break;

            case "4":
                alert("¡Gracias por usar el sistema!");
                break;

            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "4");
}
mostrarMenu();