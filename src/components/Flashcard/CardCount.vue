<template>
    <div class="text-right p-1 tracking-widest">
        <span>{{ index + 1 }}</span>
        <span>/</span>
        <span>{{ cardsCount }}</span>
    </div>
</template>

<script setup lang="ts">

import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";

const store = useFlashcardStore()

const {index, cardsCount} = storeToRefs(store)

</script>