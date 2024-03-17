<template>
    <div class="flex flex-col w-dvw h-dvh bg-gray-800  text-center text-white px-2 pt-3">
        <div class="flex justify-start px-4">
            <router-link
                to="/"
                class="text-white text-opacity-50 border border-white border-opacity-30 px-4 py-1 rounded-lg hover:text-opacity-80 hover:border-opacity-80"
            >
                Kembali
            </router-link>
        </div>
        <div class="mt-16">
            <FlashcardDeck/>
        </div>
    </div>
</template>

<script setup lang="ts">
import FlashcardDeck from "@/components/Flashcard/DeckComponent.vue";
import {useRoute} from "vue-router";
import {useFlashcardStore} from "@/stores/flashcard";
import {onMounted} from "vue";

const route = useRoute()
const store = useFlashcardStore()
const {setCurrentDeck} = store

onMounted(() => {
    store.$reset()
    setCurrentDeck(route.params.deck as string)
})

</script>