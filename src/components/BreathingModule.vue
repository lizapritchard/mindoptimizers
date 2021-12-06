<template>
    <div @click="openBreathingModal()">
        <breathing-modal ref="breathingModal"/>
        <div class="outer-wrapper">
            <breathing-animation/>
        </div>
        <div id="subtext"> Click the flower and take a deep breath </div>
    </div>
</template>

<script>
    import BreathingAnimation from "./BreathingAnimation.vue";
    import BreathingModal from "./BreathingModal.vue";
    export default {
        components: {
            BreathingAnimation,
            BreathingModal
        }, 
        methods: {
            openBreathingModal() {
                this.$refs.breathingModal.openBreathingModal()
            }
        },
        name: "BreathingModule"
    }
</script>

<style scoped>
    .outer-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80%;
    }
    #subtext {
        font-size: 1.1em;
        text-align: center;
    }
</style>