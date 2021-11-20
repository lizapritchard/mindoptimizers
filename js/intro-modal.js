Vue.component('intro-modal', {
    data() {
        return {
            modal: null, 
            username: ""
        }
    }, 
    mounted() {
        this.modal = new bootstrap.Modal(this.$el); 
        this.modal.show()
    },
    methods: {
        handleSubmit(e) {
            this.$parent.setUsername(this.username);
            this.modal.hide(); 
        }
    }, 
    template: `
        <div id="intro-modal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        Hi, what's your name?
                    </div>
                    <input v-model="username" @keyup.enter="handleSubmit()" class="form-control" id="name-entry"></input>
                    <div class="modal-footer">
                        <button @click="handleSubmit()" type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `, 
}); 