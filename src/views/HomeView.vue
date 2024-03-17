<template>
    <main>
        <div class="flex flex-col w-dvw h-dvh bg-gray-800 text-center text-white px-4 pt-3">
            <div class="flex justify-start px-4">
                <h1 class="text-2xl font-bold tracking-wider">Memokad</h1>
            </div>
            <div class="mt-16">
                <DeckList/>
                <SiteCredit/>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import SiteCredit from "@/components/SiteCredit.vue";
import DeckList from "@/components/DeckList.vue";

</script>
