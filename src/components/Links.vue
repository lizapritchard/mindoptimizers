
<template>
    <div class="resources">
        <div class="suicide-prevention"> 
            <p>National Suicide Prevention Line:</p> 
            <div class="subtext"> 800-273-8255</div>
        </div>
        <div><a href="https://www.headspace.com" target="_blank" class="subtext">Meditiation Resources</a></div>
        <div><a href="https://www.goodtherapy.org" target="_blank" class="subtext">Find a Therapist</a></div>
    </div>
</template>

<script>

export default {
   name: "Links"
}

</script>

<style scoped>

.resources {
    font-size: 1.5rem;
}

.resources > * {
    margin: 1.5rem;
}

.suicide-prevention > * {
    margin: 0.5rem 0;
}

.subtext {
    color: rgb(3, 138, 192);
}


</style>

