<script lang="ts" setup>
import { PropType, watch } from 'vue';
import { UseAbility } from './ability';

const props = defineProps({
    ability: {
        type: Object as PropType<UseAbility>,
        required: true
    }
});
</script>

<template>
    <button @click="ability.activate" :disabled="ability.isOnCooldown">{{ ability.name }}</button>
</template>