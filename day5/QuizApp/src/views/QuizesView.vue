<script setup>
import q from "./data/quizes.json"
import Card from './components/Card.vue'
import { ref, watch } from 'vue'
import Nav from "./components/Nav.vue"

const quizes = ref(q)
const search = ref("")

watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})
</script>


<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input v-model.trim="search" type="text" placeholder="search...">
        </header>
        <Nav />
        <div class="options-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
        </div>
    </div>
</template>

<style scoped>


header {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
}

.options-container {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 40px;
}
</style>