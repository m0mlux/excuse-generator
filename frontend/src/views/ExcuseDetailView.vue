<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const excuse = ref(null)

async function getExcuse() {
    const response = await fetch(
        'http://localhost:3000/excuses/' + route.params.http_code
    )

    excuse.value = await response.json()
}

onMounted(() => {
    getExcuse()
})
</script>

<template>
    <main>
        <div v-if="excuse">
            <h1>{{ excuse.http_code }}</h1>
            <h2>{{ excuse.tag }}</h2>
            <p>{{ excuse.message }}</p>
        </div>
    </main>
</template>