<!--
Listado de juegos: desplegar el listado de juegos con stock, mostrando al usuario los
campos: código, nombre, stock y precio. Se le solicita además que cada fila listada tenga el
fondo de color asignado, así como el siguiente:
Nota: Este listado se requiere que sea un componente externo al de la vista de búsqueda de juegos.-->
<template>
    <div>
        <ul>
            <li v-for="producto in productos" :key="producto.id" :style="{ background: producto.color}"> 
                
                {{ producto.id }} |
                {{ producto.nombre }} |
                {{ producto.stock }} |
                {{ producto.precio}}

            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Listado',
    data: function(){
        return {}
    },
    props: {
        productos:{
            type: Array,
            required: true
        }
    },
    computed: {

    },
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
   
</style>