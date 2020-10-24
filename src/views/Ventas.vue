<template>
<div>
    <div class="ventas">
    <h1> Ventas</h1>
    <lista :JuegosParaVender="JuegosParaVender" :totalJuegosstock="totalJuegosstock"></lista>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import Listado from '../components/Listado'
export default {
    name: 'ventas',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos']),
        ...mapGetters(['totalJuegos','JuegosParaVender', 'totalJuegosstock']),
    },
    methods: {
    
    },
     components: {
         'lista':Listado
     },
}
</script>

<style scoped lang="scss">
</style>