<template>
    <main>
        <div class="flex flex-col w-dvw h-dvh bg-gray-800 justify-center text-center text-white">
            <FlashcardDeck/>
            <SiteCredit/>
        </div>
    </main>
</template>

<script setup lang="ts">
import FlashcardDeck from "@/components/Flashcard/DeckComponent.vue";
import SiteCredit from "@/components/SiteCredit.vue";
</script>
