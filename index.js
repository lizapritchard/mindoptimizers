var app = new Vue({
    el: '#app',
    data: {
        username: ""
    }, 
    methods: {
        setUsername(val) {
            this.username = val; 
        }
    }
}); 