<script setup>
import { ref, onMounted } from 'vue'

const excuse = ref(null)

async function getRandomExcuse() {
    const response = await fetch('http://localhost:3000/excuses/random')
    excuse.value = await response.json()
}

onMounted(() => {
    getRandomExcuse()
})
</script>

<template>
    <main>
        <h1>Excuse Generator</h1>

        <div v-if="excuse">
            <h2>{{ excuse.http_code }}</h2>
            <p>{{ excuse.tag }}</p>
            <p>{{ excuse.message }}</p>
        </div>

        <button @click="getRandomExcuse">
            Changer d'excuse
        </button>
    </main>
</template>