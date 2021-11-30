<template>
    <div @click="openBreathingModal()">
        <breathing-modal ref="breathingModal"/>
        <div class="outer-wrapper">
            <breathing-animation/>
        </div>
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
        height: 100%;
    }
</style>