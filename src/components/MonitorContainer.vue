<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { useConfig } from '../composables/useConfig'

const { currentScreendesign, currentScreendesignIndex } = useConfig()

const wrapper = ref<HTMLElement | null>(null)
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

watch(currentScreendesignIndex, (oldIndex, newIndex) => {
	if (oldIndex !== newIndex) {
		wrapper.value?.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
})
</script>
<template>
	<div
		class="border-8 rounded-lg shadow-black shadow-lg mx-auto overflow-y-scroll"
		:style="wrapperStyle"
		ref="wrapper"
	>
		<img :src="'./screendesigns/' + currentScreendesign?.image" alt="Screen Design" />
	</div>
</template>
