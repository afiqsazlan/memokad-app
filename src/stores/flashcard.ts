import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import almulk from "@/data/decks/almulk";
import type {Card} from "@/types/card";
import {load, trackEvent} from 'fathom-client'


type QuizMode = 'shuffled' | 'sequential'

export const useFlashcardStore = defineStore('flashcard', () => {

    load(import.meta.env.VITE_FATHOM_SITE_ID)

    const deck = almulk;
    const deckTitle = deck.title
    const cards = ref<Card[]>([])

    const cardsPerDeck = 5

    const index = ref<number>(0)
    const correctAnswersCount = ref<number>(0)
    const wrongAnswersCount = ref<number>(0)

    const selectedMode = ref<QuizMode>()
    const setSelectedMode = (mode: QuizMode) => selectedMode.value = mode

    const isShowingQuestion = ref(true)

    const isFirstSet = ref(true)

    const isOngoing = computed(() => !!cards.value[index.value])
    const isReadyForNewSet = computed(() => cards.value.length === 0 || !isOngoing.value)

    const showQuestion = (value = true) => isShowingQuestion.value = value
    const resetIndex = () => index.value = 0
    const resetResults = () => {
        correctAnswersCount.value = 0
        wrongAnswersCount.value = 0
    }

    const initNewSet = (mode: QuizMode) => {

        if (isFirstSet.value) {
            isFirstSet.value = false
        } else {
            sendFathomNewFlashCardSetRequested()
        }

        setSelectedMode(mode)

        cards.value = selectCardsFromDeck()
        resetIndex()
        resetResults()
        showQuestion()
    }

    const selectCardsFromDeck = () => {
        let selectedCards: Card[] = [];

        if (selectedMode.value === 'sequential') {
            selectedCards = deck.cards
        } else if (selectedMode.value === 'shuffled') {
            const shuffledCards = deck.cards.sort(() => Math.random() - 0.5)

            for (let i = 0; i < cardsPerDeck; i++) {
                selectedCards.push(shuffledCards[i])
            }
        }

        return selectedCards
    }

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

    const cardsCount = computed(() => cards.value?.length)

    const displayText = computed(() => {
        return isShowingQuestion.value
            ? cards.value[index.value]?.front
            : cards.value[index.value]?.back
    })

    const displayDescription = computed(() => cards.value[index.value]?.description ?? '')

    const sendFathomFlashCardCompleted = () => {
        trackEvent('flashCardCompleted');
    }

    const sendFathomNewFlashCardSetRequested = () => {
        trackEvent('newFlashCardSetRequested');
    }

    return {
        index,
        deckTitle,
        displayText,
        displayDescription,
        isShowingQuestion,
        correctAnswersCount,
        wrongAnswersCount,
        selectedMode,
        isOngoing,
        cardsCount,
        isFirstSet,
        isReadyForNewSet,
        initNewSet,
        flipCard,
        markAsCorrect,
        sendFathomFlashCardCompleted
    }
})
