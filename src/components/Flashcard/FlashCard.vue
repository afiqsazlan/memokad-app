<template>
    <div class="flex flex-col w-full md:w-1/2 px-6 my-6 ">
        <div class="border-2 border-white text-center  flex justify-center items-center h-64 md:h-40 rounded-lg px-8">
            <p class="text-2xl leading-10 ">
                {{ displayText }}
            </p>
        </div>
        <div class="mt-8">
            <template v-if="isShowingQuestion">
                <button
                    class="animate-pulse border border-blue-300 border-opacity-50 text-blue-300 text-lg font-bold  tracking-wider  py-3 w-full md:w-48 rounded-lg hover:bg-gray-700"
                    @click="flipCard()"
                >
                    SEMAK
                </button>
            </template>
            <template v-else>
                <div class="flex space-x-2 md:space-x-4">
                    <button
                        class=" border border-red-400 border-opacity-50 text-lg text-red-400 font-bold tracking-wider py-3 w-1/2 md:w-48 rounded-lg hover:bg-red-400  hover:text-gray-700 "
                        @click="markAsCorrect(false)"
                    >
                        SALAH
                    </button>
                    <button
                        class=" border border-green-400 border-opacity-50 text-lg text-green-400 font-bold  tracking-wider  py-3 w-1/2 md:w-48 rounded-lg hover:bg-green-400 hover:text-gray-700 "
                        @click="markAsCorrect"
                    >
                        BETUL
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useFlashcardStore} from "@/stores/flashcard";
import {storeToRefs} from "pinia";

const store = useFlashcardStore()

const {displayText, isShowingQuestion} = storeToRefs(store)

const {markAsCorrect, flipCard} = store

</script>