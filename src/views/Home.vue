
 <!--Vista de presentación: desplegar un título con el nombre de la tienda 32bits utilizando una
    etiqueta h1 y un subtítulo con la leyenda Juegos de PC y consolas haciendo uso de una
    etiqueta h2. Además, esta vista debe contener un menú que permita la navegación a través del
    sitio-->
<template>
  <div class="home">
    
       <h1>{{ titulo }}</h1>
        <h2>{{ subtitulo}}</h2>
  </div>
  
</template>

 <script>
// @ is an alias to /src


export default {
  name: 'Home',
//  components: {

  //},
      data: function(){
        return {
            
        titulo: 'Tienda 32Bits',
        subtitulo:'Juegos de PC y consolas'
        }
}
}

</script>