<template>
    <div class="outer-wrapper">
        <div class="inner-wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BreathingAnimation"
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

    .outer-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-wrapper {
        height: 125px;
        width: 125px;
    }
</style>
