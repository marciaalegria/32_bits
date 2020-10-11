import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[
      {
        id:"p-01",
        nombre:"product 1",
        en_venta:true,
        precio:1200,
        stock:200,
        en_oferta:false,
        dscto_oferta:0,
      },
      {
        id:"p-02",
        nombre:"product 2",
        en_venta:true,
        precio:4200,
        stock:2,
        en_oferta:true,
        dscto_oferta:10,
      },
      {
        id:"p-03",
        nombre:"product 3",
        en_venta:true,
        precio:10200,
        stock:5,
        en_oferta:false,
        dscto_oferta:0,
      },
      {
        id:"p-04",
        nombre:"product 4",
        en_venta:true,
        precio:2000,
        stock:1,
        en_oferta:false,
        dscto_oferta:0,
      },
    ],
    ventas:[],
    titulo:"Productos en venta",
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    totalProductos: state=>{
      return state.productos.length;
    },
    ventasRealizadas: state=>{
      return state.ventas.length;
    }
  },
  modules: {
  }
})
