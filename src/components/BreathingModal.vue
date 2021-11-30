<template>
    <b-modal ref="breathing-modal" id="breathing-modal" hide-footer title="Click the flower and take a deep breath">
        <div class="outer-wrapper" @click="startBreathingAnimation()">
            <breathing-animation ref="breathing-animation"/>
        </div>
    </b-modal>
</template>

<script>
    import BreathingAnimation from "./BreathingAnimation.vue"
    export default {
        methods: {
            openBreathingModal() {
                this.$refs["breathing-modal"].show()
            },
            startBreathingAnimation() {
                this.$refs["breathing-animation"].startBreathingAnimation()
            }
        },
        components: {
            BreathingAnimation
        }, 
        name: "BreathingModal"
    }
</script>

<style scoped>
    .outer-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30rem;
    }
</style>