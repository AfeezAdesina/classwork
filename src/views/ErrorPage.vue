<template>
    <div class="page404">
        <img src="../assets/R.png" alt="404image" class="404image" />
        <h1>Page not found</h1>
        <router-link to="/"><button>Back</button></router-link>
    </div>

</template>

<script>
// export default {

// }


</script>

<style scoped>
h1 {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-size: 40px;

}

.page404 {
    display:flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
}

button {
    padding: 10px;
    border-style: none;
    background-color: rgb(255, 255, 255);
    color: var(--color-text);
    border-radius: 10px;
    font-size: 18px
}

button:hover {
    border:1px solid white;
   
}
</style>
