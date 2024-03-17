<template>
    <div class="flex flex-col items-center w-full ">
        <DeckTitle/>
        <template v-if="isFirstSet">
            <DeckModes/>
        </template>
        <FlashCard v-else-if="isOngoing"/>
        <DeckResult v-else/>
        <template v-if="!isFirstSet && isReadyForNewSet">
            <div class="px-6 w-full ">
                <button
                    class="mt-4 animate-pulse border border-blue-300 border-opacity-50 text-blue-300 text-lg font-bold  tracking-wider  py-3 w-full  sm:w-48 rounded-lg hover:bg-gray-700"
                    @click="initNewSet(selectedMode ?? 'shuffled')"
                >
                    {{ selectedMode === 'shuffled' ? 'SET SETERUSNYA' : 'ULANG SET' }}
                </button>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import FlashCard from '@/components/Flashcard/FlashCard.vue'
import DeckResult from "@/components/Flashcard/DeckResult.vue"
import DeckTitle from "@/components/Flashcard/DeckTitle.vue";
import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";
import DeckModes from "@/components/Flashcard/DeckModes.vue";

const store = useFlashcardStore()
const {isOngoing, isFirstSet, isReadyForNewSet, selectedMode} = storeToRefs(store)
const {initNewSet} = store
</script>