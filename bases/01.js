const app = Vue.createApp({
    template:'',
    data(){
        return {
            mensaje : 'hola mundo',
            block: 'hola po'
        }
    },
    methods:{
        cambiarMensaje(){
            this.mensaje = document.getElementById('nuevoMensaje').value
        }
    }
})
app.mount('#myApp')