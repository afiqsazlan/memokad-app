<template>
    <div class="items-center px-6 w-full mt-3">
        <div class="space-y-6">
            <div class="md:space-x-3">
                <ul>
                    <li v-for="mode in currentDeckQuizModes" :key="`quiz-mode-${mode}`">
                        <button
                            class="mt-4 animate-pulse border border-blue-300 border-opacity-50 text-blue-300 text-lg font-bold capitalize  tracking-wider  py-3 w-full  sm:w-48 rounded-lg hover:bg-gray-700"
                            @click="initNewSet(mode)"
                        >
                            {{ mode }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";

const store = useFlashcardStore()
const {currentDeckQuizModes} = storeToRefs(store)

const {initNewSet} = store

</script>