console.log("Hola");
//definir el valor del ticket
const ticket = 200;

//definir los descuentos
let descuentoTrainee, descuentoJunior, descuentoMix;

descuentoTrainee = 0.80;
descuentoJunior = 0.50;
descuentoMix = 0.15;

//variables con las que vamos a trabajar

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;

//elementos para calcular

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnCalcular = document.querySelector('#calcular');
btnBorrar = document.querySelector('#borrar');

function calcularPago() {
if (cantidad.value > 0){
    let total = cantidad.value * ticket;
    //condicionar por descuento
    switch (categoria.value) {
        case "trainee":
            total = total - (total * descuentoTrainee)
            break;
        case "junior":
            total = total - (total * descuentoJunior)
            break;
        case "mix":
            total = total - (total * descuentoMix)
            break;
            
    }

    total_p.innerHTML = `Total a Pagar: $ ${total}`;
} 
else {
    total_p.innerHTML = `Total a Pagar: La cantidad ingresada es inválida`;
     }
}

//botones
btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})

btnBorrar.addEventListener('click', () => formulario.reset());

//comprobar ingresos

function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('Por favor, completá los campos para realizar el cálculo');
        return
    }
    else if ( nombre == ''){
        alert('El campo nombre es obligatorio')
        return
    }
    else if(apellido == ''){
        alert('El campo apellido es obligatorio')
        return
    }
    else if(correo == ''){
        alert('El campo correo es obligatorio')
        return
    }
    else if(cantidad.value == '' || cantidad.value == 0){
        alert('La cantidad es necesaria')
        return
    }
    else if (cantidad.value < 0){
        alert ('La cantidad es inválida')
        return
    }

}


