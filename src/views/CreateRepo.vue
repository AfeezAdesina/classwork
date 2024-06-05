<template>
    <p>Create a repository here</p>
    <h1 v-for="i in api" :key="i.id" class="list">
        <h1>{{ i.title }}</h1>
        <p>{{ i.body }}</p>
    </h1>

</template>

<script>

</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    gap: 20px;
}</style>