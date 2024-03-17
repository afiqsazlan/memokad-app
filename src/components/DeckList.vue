<template>
    <div class="flex justify-center">
        <ul class="mx-4 max-w-xs w-3/4 space-y-4">
            <li v-for="deck in deckList" :key="`deck-${deck.slug}`">
                <router-link :to="{ name: 'deck-show', params: { deck: deck.slug }}">
                    <div
                        class="border border-blue-300 border-opacity-50 text-blue-300 text-lg font-bold  tracking-wider  py-3 w-full md:w-48 rounded-lg hover:bg-gray-700"
                    >
                        {{ deck.title }}
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import deckList from "@/data/decks";
</script>