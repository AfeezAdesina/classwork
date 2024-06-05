<template>

    <div class="repo-head">
        <div v-for="repo in repos" :key="repo.name" class="repo">
            <router-link :to="{name: 'RepoDetails', params:{id:repo.name}}">
                <h3>{{ repo.name }}</h3>
                <!-- <p>Github Repo ID: {{ repo.id }}</p> -->
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

<style scoped>
.repo{
    border:1px solid rgb(255, 255, 255);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
   
}
repo:hover{
    transform: scale(1.5);
}
.repo-head{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    /* align-items: center; */
    margin-block-start: 20px;
   
}
</style>