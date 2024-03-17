import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'
import type {Card} from "@/types/card";
import {load, trackEvent} from 'fathom-client'
import deckList from "@/data/decks";
import type {Deck as DeckType} from "@/types/deck";
import type {QuizMode} from "@/types/quizMode";


export const useFlashcardStore = defineStore('flashcard', () => {

    load(import.meta.env.VITE_FATHOM_SITE_ID)

    const deck = ref<DeckType | null>();

    const setCurrentDeck = (slug: string) => {
        const index = deckList.findIndex((deck) => deck.slug === slug)
        deck.value = deckList[index]
        console.log(`new deck: ${deck.value?.title}`)
    }

    const deckTitle = computed(() => deck.value?.title)
    const cards = ref<Card[]>([])

    const cardsPerDeck = 5

    const index = ref<number>(0)
    const correctAnswersCount = ref<number>(0)
    const wrongAnswersCount = ref<number>(0)

    const selectedMode = ref<QuizMode | null>()
    const setSelectedMode = (mode: QuizMode) => selectedMode.value = mode
    watch(() => selectedMode, () => cards.value = [])
    const currentDeckQuizModes = computed(() => deck.value?.modes)

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
            selectedCards = deck.value?.cards ?? []
        } else if (selectedMode.value === 'shuffled') {
            const shuffledCards = deck.value?.cards.sort(() => Math.random() - 0.5)

            for (let i = 0; i < cardsPerDeck; i++) {
                if (shuffledCards && shuffledCards[i]) {
                    selectedCards.push(shuffledCards[i])
                }
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

    const $reset = () => {
        deck.value = null
        selectedMode.value = null
        cards.value = []
        isFirstSet.value = true
        resetIndex()
        resetResults()
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
        currentDeckQuizModes,
        displayDescription,
        isShowingQuestion,
        correctAnswersCount,
        wrongAnswersCount,
        selectedMode,
        isOngoing,
        cardsCount,
        isFirstSet,
        isReadyForNewSet,
        $reset,
        setCurrentDeck,
        initNewSet,
        flipCard,
        markAsCorrect,
        sendFathomFlashCardCompleted
    }
})
