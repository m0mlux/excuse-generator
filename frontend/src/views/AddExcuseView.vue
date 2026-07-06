<script setup>
import { ref } from 'vue'

const http_code = ref('')
const tag = ref('')
const message = ref('')
const notification = ref('')

async function addExcuse() {
    const response = await fetch('http://localhost:3000/excuses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            http_code: http_code.value,
            tag: tag.value,
            message: message.value
        })
    })

    await response.json()

    notification.value = 'Excuse ajoutée'
    setTimeout(() => {
        notification.value = ''
    }, 3000)

    http_code.value = ''
    tag.value = ''
    message.value = ''
}
</script>

<template>
    <main>
        <h1>Ajouter une excuse</h1>

        <form @submit.prevent="addExcuse">
            <input v-model="http_code" type="number" placeholder="Code HTTP" required>

            <input v-model="tag" type="text" placeholder="Tag" required>

            <input v-model="message" type="text" placeholder="Message" required>

            <button type="submit">Ajouter</button>
        </form>

        <div v-if="notification" class="toast">
            {{ notification }}
        </div>
    </main>
</template>