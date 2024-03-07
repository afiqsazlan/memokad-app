<template>
    <div class="flex flex-col items-center w-full ">
        <DeckTitle/>
        <FlashCard v-if="isOngoing"/>
        <DeckResult v-else/>
    </div>
</template>

<script setup lang="ts">
import FlashCard from '@/components/Flashcard/FlashCard.vue'
import DeckResult from "@/components/Flashcard/DeckResult.vue"
import DeckTitle from "@/components/Flashcard/DeckTitle.vue";
import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";

const store = useFlashcardStore()
const {isOngoing} = storeToRefs(store)
</script>