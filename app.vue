<script setup lang="ts">
import { useNameStore } from '~/stores/name-store';
import { ref } from '@vue/reactivity';

const nameStore = useNameStore();
const name = ref();

const getNationality = async () => {
    await nameStore.$load(name.value);
}
</script>

<template>
    <div>
        <main>
            <input type="text" name="name" :value="name">
            <button type="button" @click.prevent="getNationality">Predict My Nationality</button>
        </main>
    </div>
</template>
