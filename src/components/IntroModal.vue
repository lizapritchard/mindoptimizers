<template>
    <div>
        <b-modal ref="intro-modal" id="intro-modal" hide-header hide-footer>
            <p class="my-4"> Hi, what's your name?</p>
            <input v-model="username" @keyup.enter="handleSubmit()" class="form-control" id="name-entry"/>
            <div class="modal-footer">
                <button @click="handleSubmit()" type="submit" class="btn btn-primary">Submit</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: null, 
                username: ""
            }
        },
        methods: {
            handleSubmit(e) {
                console.log("handle Submit")
                console.log(this.$parent)
                this.$parent.setUsername(this.username);
                this.$refs['intro-modal'].hide();
            },
        },
        mounted () {
            this.$refs['intro-modal'].show()
        },
        name: "IntroModal"
    }
</script>