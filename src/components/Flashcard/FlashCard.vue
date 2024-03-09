<template>
    <div class="flex flex-col w-full md:w-1/2 px-6 my-6 ">
        <div class=" border-2 border-white text-center  flex flex-col  items-center h-96 md:h-54 py-4 rounded-lg px-4">
            <div class="flex w-full">
                <p class="border border-white border-opacity-30 text-sm text-white text-opacity-40 tracking-wider min-w-24 px-2 py-1 rounded-lg">
                    {{ isShowingQuestion ? 'SOALAN' : 'JAWAPAN' }}
                </p>
            </div>
            <div class=" h-full px-4  flex items-center">
                <p class=" text-3xl leading-[5rem] tracking-wider" dir="rtl"> {{ displayText }}</p>
            </div>
            <template v-if="!isShowingQuestion">
                <div class=" flex text-right w-full justify-end">
                    <p class=" text-sm text-white text-opacity-60 px-2 py-1 ">
                        {{ displayDescription }}
                    </p>
                </div>
            </template>
        </div>
        <CardCount class="mt-1"/>
        <div class="mt-4">
            <template v-if="isShowingQuestion">
                <button
                    class="animate-pulse border border-blue-300 border-opacity-50 text-blue-300 text-lg font-bold  tracking-wider  py-3 w-full md:w-48 rounded-lg hover:bg-gray-700"
                    @click="flipCard()"
                >
                    SEMAK
                </button>
            </template>
            <template v-else>
                <div class="flex w-full space-x-2 justify-center md:space-x-4">
                    <button
                        class=" border border-red-400 border-opacity-50 text-lg text-red-400 font-bold tracking-wider py-3 w-1/2 md:w-48 rounded-lg hover:bg-red-400  hover:text-gray-700 "
                        @click="markAsCorrect(false)"
                    >
                        SALAH
                    </button>
                    <button
                        class=" border border-green-400 border-opacity-50 text-lg text-green-400 font-bold  tracking-wider  py-3 w-1/2 md:w-48 rounded-lg hover:bg-green-400 hover:text-gray-700 "
                        @click="markAsCorrect()"
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
import CardCount from "@/components/Flashcard/CardCount.vue";

const store = useFlashcardStore()

const {displayText, isShowingQuestion, displayDescription} = storeToRefs(store)

const {markAsCorrect, flipCard} = store

</script>