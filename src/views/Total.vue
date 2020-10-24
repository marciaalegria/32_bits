<!--Vista de total de ventas: esta vista constará de 2 secciones:
Listado de ventas registradas: se debe mostrar una lista de las ventas registradas y/o
procesadas, desplegando para cada registro el código, nombre y precio de venta. En el
caso de no existir ventas registradas, se debe mostrar la leyenda “No hay ventas
registradas”.
Monto total de ventas: se debe desplegar una leyenda que muestre la sumatoria de todos
los juegos vendidos. Para ésto, se deben sumar todos los precios de los juegos registrados
como vendidos.-->
<template>
<div>
    
    <h1> TOTAL VENTAS</h1>
    <div class="total">
    <ventaTotal :ventas="ventas" :totalSuma="totalSuma"></ventaTotal>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import ventaTotal from '../components/VentaTotal'
export default {
    name: 'Productos',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos','ventas']),
        ...mapGetters(['totalJuegos','JuegosParaVender','ventasRealizadas','totalSuma']),
    },
    methods: {
        // -- Metodos
    },
     components: {
         'ventaTotal':ventaTotal
     },
}
</script>

<style scoped>
 
     .total{
        text-align:left;
        display:flex;
        flex-direction:column;
        width:800px;
        justify-content:center;
        margin:auto ;
        margin-top:50px;
    
    }
</style>
