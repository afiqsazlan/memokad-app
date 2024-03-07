<template>
    <div class="flex justify-center mt-8 space-x-4 md:space-x-6 px-6 w-full md:w-1/2">
        <div
            class=" border border-red-400 border-opacity-50 text-lg text-red-400 font-bold tracking-wider px-4 py-7  w-1/2 rounded-lg flex-col space-y-6   ">
            <div>SALAH</div>
            <div class="text-6xl ">{{ wrongAnswersCount }}</div>
        </div>
        <div
            class=" border border-green-400 border-opacity-50 text-lg text-green-400 font-bold tracking-wider  px-4 py-7 w-1/2 rounded-lg flex-col space-y-6   ">
            <div>BETUL</div>
            <div class="text-6xl ">{{ correctAnswersCount }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const store = useFlashcardStore()

const {correctAnswersCount, wrongAnswersCount} = storeToRefs(store)
const {sendFathomFlashCardCompleted} = store

onMounted(() => {
    if (import.meta.env.PROD) {
        sendFathomFlashCardCompleted()
    }
})

</script>