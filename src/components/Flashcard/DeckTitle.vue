<template>
    <h1 class="text-3xl font-bold tracking-wider">
        {{ deckTitle }}
    </h1>
</template>

<script setup lang="ts">
import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";

const store = useFlashcardStore()
const {deckTitle} = storeToRefs(store)

</script>