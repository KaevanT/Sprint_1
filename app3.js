const app3 = new Vue({
    el: '#app3',
    data: {
        integrantes: []
    },
    methods:{
        getIntegrantes: function(){
            axios.get('integrantes.json').then(response => {
                this.integrantes = response.data
            })
        }
        
    },
    created: function(){
        this.getIntegrantes()
        console.log(this.integrantes)
    }

})