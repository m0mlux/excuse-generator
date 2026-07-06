<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const seconds = ref(5)

let countdown

onMounted(() => {
    countdown = setInterval(() => {
        seconds.value--

        if (seconds.value === 0) {
            clearInterval(countdown)
            router.push('/')
        }
    }, 1000)
})

onUnmounted(() => {
    clearInterval(countdown)
})
</script>

<template>
    <main>
        <h1>404 - Page introuvable</h1>

        <p>Redirection vers l'accueil dans {{ seconds }} seconde(s)...</p>
        <RouterLink to="/">Retourner immédiatement à l'accueil</RouterLink>
        <img
            src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
            alt="404"
        >
    </main>
</template>