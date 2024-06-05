<template>
  
</template>

<script>
  import { ref, onMounted } from 'vue';


    const repo = ref([]);

    onMounted(() => {
    fetch('https://api.github.com/users/AfeezAdesina/repos/' + [1])
        .then((res) => res.json())
        .then((data) => {
        repo.value = data; // Update the todos array with fetched data
        });
    });
</script>

<style>

</style>