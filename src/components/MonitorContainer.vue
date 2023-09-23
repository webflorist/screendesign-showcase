<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const devicePixelRatio = ref(1)
onMounted(() => {
	devicePixelRatio.value = window.devicePixelRatio
})

const wrapperStyle = computed(() => {
	return {
		'max-width': `${1920 / devicePixelRatio.value}px`,
		'max-height': `${1200 / devicePixelRatio.value}px`,
		'aspect-ratio': '1920 / 1200',
	}
})
</script>
<template>
	<div class="border-8 rounded-lg shadow-black shadow-lg mx-auto overflow-y-scroll" :style="wrapperStyle">
		<slot />
	</div>
</template>
