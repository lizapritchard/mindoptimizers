<template>
    <div class="inner-wrapper" ref="inner-wrapper" :class="{animated : isAnimated}">
        <div v-for="index in 6" :key="index" class="circle"></div>
    </div>
</template>

<script>
    export default {
        name: "BreathingAnimation",
        data() {
            return {
                isAnimated: false
            }
        },
        methods: {
            startBreathingAnimation() {
                this.isAnimated = true; 
            }
        }
    }
</script>

<style scoped>
    .circle {
        background: #fff;
        height: 125px;
        width: 125px;
        border-radius: 50%;
        position: absolute;
        opacity: 0.6;
        transform: translate(0, 0);
    }
    .inner-wrapper {
        height: 125px;
        width: 125px;

    }

    .animated {
        animation: pulse 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;
    }

    /* initial positions */
    .circle:nth-child(1) {
        transform: translate(-35px, -50px);
        background-color: #fcdc2c;
    }

    .circle:nth-child(2) {
        transform: translate(35px, -50px);
        background-color: #f5f258;
    }

    .circle:nth-child(3) {
        transform: translate(-60px, 0);
        background-color: #fcdc2c;
    }

    .circle:nth-child(4) {
        transform: translate(60px, 0);
        background-color: #f5f258;
    }

    .circle:nth-child(5) {
        transform: translate(-35px, 50px);
        background-color: #fcdc2c;
    }

    .circle:nth-child(6) {
        transform: translate(35px, 50px);
        background-color: #f5f258;
    }

    /* BREATHING ANIMATION */
    @keyframes pulse {
    0% {
        transform: scale(.15) rotate(180deg);
    }
    100% {
        transform: scale(1);
    }
    }

    @keyframes circle-1 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-35px, -50px);
    }
    }

    @keyframes circle-2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(35px, 50px);
    }
    }

    @keyframes circle-3 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-60px, 0);
    }
    }

    @keyframes circle-4 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(60px, 0);
    }
    }

    @keyframes circle-5 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-35px, 50px);
    }
    }

    @keyframes circle-6 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(35px, -50px);
    }
    }

</style>
