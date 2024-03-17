import type {Card} from "@/types/card";
import type {QuizMode} from "@/types/quizMode";

export interface Deck {
    title: string
    slug: string
    cards: Card[]
    modes: QuizMode[]
}