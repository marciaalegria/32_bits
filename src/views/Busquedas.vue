<!--Vista de búsqueda de juegos: esta vista constará de 3 secciones:
Filtro: constará de un cuadro de texto que filtrará por el código de juego el listado de
juegos (explicado más abajo).
Cantidad de juegos totales: constará de una leyenda que muestre la cantidad de juegos
totales registrados.
Listado de juegos: desplegar el listado de juegos con stock, mostrando al usuario los
campos: código, nombre, stock y precio. Se le solicita además que cada fila listada tenga el
fondo de color asignado, así como el siguiente:
Nota: Este listado se requiere que sea un componente externo al de la vista de búsqueda de juegos.

-->
<template>
    <div>
        <!--filtro-->
    <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="001">One</option>
    <option value="002">Two</option>
    <option value="003">Three</option>
    <option value="004">four</option>
    <option value="005">005</option>
    <option value="006">006</option>
  </select>
        <!--cantidad de juegos-->

        <!--listado de juegos-->
        
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'busquedas',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['id', 'nombre', 'stock', 'precio', 'color', 'destacado'])
    },
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    
</style>