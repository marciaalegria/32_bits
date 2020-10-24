<!--Vista de venta de juegos: esta vista constará de 2 secciones:
Cantidad de juegos con stock: constará de una leyenda que muestre la cantidad de
juegos con stock mayor a 0.
Venta de juegos: se requiere listar los juegos con stock. Cada fila de juegos listada debe
llevar un botón llamado vender, el cual debe realizar el proceso de venta del producto en
cuestión. Este proceso debe abarcar las siguientes tareas:
Procesar la venta: constará de restar 1 unidad al stock del producto seleccionado.
Este proceso debe estar configurado para tardar 2 segundos en ejecutarse (tip: usar
la función setTimeout).
Registrar la venta: constará de agregar el código, nombre y precio del producto a un
estado de la aplicación que almacene las ventas. Este estado debe poder registrar
más de 1 venta. Este proceso debe tardar 1 segundo en ejecutarse.
Nota: Ambos procesos deben ejecutarse de forma sincronizada, es decir, primero se debe procesar la
venta y, una vez ésto se haya ejecutado, se podrá registrar. Además, al finalizar cada venta, se debe
mostrar una alerta al usuario con el mensaje “Venta procesada”.
-->
<template>
<div>
    <h1>kjgnkvfl</h1>
    <Listado/>
</div>
</template>

<script>
import Listado from '../components/Listado'
export default {
    name: 'Ventas',
    components: {
        Listado
    },
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    
</style>