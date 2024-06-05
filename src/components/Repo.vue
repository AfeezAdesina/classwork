<template>

    <div class="repo-head">
        <div v-for="repo in repos" :key="repo.name" class="repo">
            <router-link :to="{name: 'RepoDetails', params:{id:repo.name}}">
                <h3>Github Repo name: {{ repo.name }}</h3>
                <p>Github Repo ID: {{ repo.id }}</p>
            </router-link>
        </div>
    </div>
    


</template>

<script setup>
  import { ref, onMounted } from 'vue';


  const repos = ref([]);

  onMounted(() => {
    fetch('https://api.github.com/users/AfeezAdesina/repos')
      .then((res) => res.json())
      .then((data) => {
        repos.value = data; // Update the todos array with fetched data
      });
  });
</script>

<style>
.repo{
    border:1px solid black;
    border-radius: 10px;
    padding: 20px;
   
}
.repo-head{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
   
}
</style>