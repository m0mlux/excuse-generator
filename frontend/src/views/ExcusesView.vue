<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const excuses = ref([])

async function getExcuses() {
    const response = await fetch('http://localhost:3000/excuses')
    excuses.value = await response.json()
}

onMounted(() => {
    getExcuses()
})
</script>

<template>
    <main>
        <h1>Toutes les excuses</h1>

        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Tag</th>
                    <th>Message</th>
                </tr>
            </thead>

            <tbody>
                <tr
                v-for="excuse in excuses" :key="excuse.http_code" @click="router.push('/excuses/' + excuse.http_code)">
                    <td>{{ excuse.http_code }}</td>
                    <td>{{ excuse.tag }}</td>
                    <td>{{ excuse.message }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
tbody tr {
    cursor: pointer;
}

tbody tr:hover {
    background-color: #eeeeee;
}
</style>