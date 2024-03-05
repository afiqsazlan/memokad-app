<script setup lang="ts">

import {computed, ref} from 'vue'

let isShowingQuestion = ref(true)

let stepCount = ref(1)

let correctAnswersCount = 0
let wrongAnswersCount = 0

const showQuestion = (value = true) => isShowingQuestion.value = value

const nextQuestion = () => {
    showQuestion()
    stepCount.value += 1
}

const markAsCorrect = (isCorrect = true) => {
    if (isCorrect) {
        correctAnswersCount += 1
    } else {
        wrongAnswersCount += 1
    }

    nextQuestion()

    console.log(`correct: ${correctAnswersCount} vs wrong: ${wrongAnswersCount}`)
}

const displayText = computed(() => {
    return isShowingQuestion.value
        ? cards[stepCount.value - 1]?.front
        : cards[stepCount.value - 1]?.back
})

interface Card {
    front: string
    back: string
}

const cards: Card[] = [
    {
        front: "...تَبَـٰرَكَ ٱلَّذِى بِيَدِه",
        back: "ِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِير..."
    },
    {
        front: "...ٱلَّذِى خَلَقَ ٱلْمَوْتَ",
        back: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ.."
    }
]
</script>

<template>
    <main>
        <div class="flex flex-col w-dvw h-dvh bg-gray-800 justify-center text-center  text-white">
            <h1 class="text-3xl font-bold tracking-wider">
                Al-Mulk
            </h1>
            <div class="w-100 flex justify-center mt-12">
                <div class="border border-white text-center flex justify-center items-center w-1/3 h-40 ">
                    <div>
                        {{ displayText }}
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <button @click="showQuestion(false)"
                        class="border border-white py-3 w-48 rounded-lg hover:bg-gray-700"
                >
                    SEMAK
                </button>
            </div>
        </div>
    </main>
</template>
