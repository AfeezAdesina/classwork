<template>

    <form type="form" class="form">
        <h1>Create a repository here</h1>
        <input type="text" for="text" placeholder="Repository Name"/>
        <input type="text" for="text" placeholder="Language"/>
        <input type="text" for="text" placeholder="Created By"/>
        <button>Create Repo</button>
    </form>
    

</template>

<script>

</script>

<style scoped>
.list,.form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items:center
 
}
input{
    padding:10px;
    border-radius: 10px;
    width:50%;
    font-size: 20px;
}

button {
    padding: 10px;
    border-style: none;
    background-color: rgb(255, 255, 255);
    color: var(--color-text);
    border-radius: 10px;
    font-size: 20px;
    width:50%
}

button:hover {
    border:1px solid var(--color-background);
    offset: 10px;

}

</style>