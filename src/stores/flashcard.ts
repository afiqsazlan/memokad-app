import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import almulk from "@/data/decks/almulk";

export const useFlashcardStore = defineStore('flashcard', () => {

    const deck = almulk;
    const deckTitle = deck.title
    const cards = deck.cards

    const index = ref<number>(0)
    const correctAnswersCount = ref<number>(0)
    const wrongAnswersCount = ref<number>(0)

    const isShowingQuestion = ref(true)

    const showQuestion = (value = true) => isShowingQuestion.value = value

    const nextCard = () => {
        showQuestion()
        index.value += 1
    }

    const flipCard = () => {
        showQuestion(false)
    }

    const markAsCorrect = (isCorrect = true) => {

        if (isCorrect) {
            correctAnswersCount.value += 1
        } else {
            wrongAnswersCount.value += 1
        }

        nextCard()
    }

    const cardsCount = computed(() => deck.cards?.length)

    const displayText = computed(() => {
        return isShowingQuestion.value
            ? cards[index.value]?.front
            : cards[index.value]?.back
    })

    const isOngoing = computed(() => !!cards[index.value])

    return {
        index,
        deckTitle,
        displayText,
        isShowingQuestion,
        correctAnswersCount,
        wrongAnswersCount,
        isOngoing,
        cardsCount,
        flipCard,
        markAsCorrect,
    }
})
