<!--Vista de búsqueda de juegos: esta vista constará de 3 secciones:
Filtro: constará de un cuadro de texto que filtrará por el código de juego el listado de
juegos
Cantidad de juegos totales: constará de una leyenda que muestre la cantidad de juegos
totales registrados.

-->
<template>
    <div>
            <!--filtro-->
        <div >
            <label>Seleccione código</label>
            <input type="text" v-model="search" @change="buscar">
        </div>

            <!--cantidad de juegos-->

        <div>cantidad de juegos totales registrados = {{ totalProductos }}</div>

            <!--listado de juegos-->
        <Listado :productos= "resultado" />

    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Listado from '../components/Listado'

export default {
    name: 'Busquedas',
    components: {
        Listado
    },
    data: function(){
        return {
            search:'',
            resultado:[]
        }

    },
    computed: { 
        ...mapState(['productos']),
        
        ...mapGetters(['totalProductos', 'productosFiltrados'])
        },
        

    methods: {
        buscar(){
                
            this.resultado = this.productosFiltrados(this.search)
         
            
        }
    },
    created(){
        this.resultado = this.productos
    }
}
</script>

<style scoped>
    
</style>