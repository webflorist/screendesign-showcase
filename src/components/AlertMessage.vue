<script setup lang="ts">
import { computed } from 'vue'
import SvgCircleX from './svg/SvgCircleX.vue'
import SvgTriangleExclamation from './svg/SvgTriangleExclamation.vue'
import SvgCircleCheck from './svg/SvgCircleCheck.vue'
import SvgCircleInfo from './svg/SvgCircleInfo.vue'

type AlertType = 'warning' | 'error' | 'success' | 'info'

const props = defineProps({
	type: {
		type: [String as () => AlertType],
		required: false,
		default: 'info',
	},
	title: {
		type: String,
		required: false,
		default: null,
	},
})

const bgClass = computed(() => {
	if (props.type === 'error') {
		return 'bg-error-light'
	} else if (props.type === 'warning') {
		return 'bg-warning-light'
	} else if (props.type === 'success') {
		return 'bg-success-light'
	}
	return 'bg-info-light'
})

const titleClass = computed(() => {
	if (props.type === 'error') {
		return '!text-error-dark'
	} else if (props.type === 'warning') {
		return '!text-warning-dark'
	} else if (props.type === 'success') {
		return '!text-success-dark'
	}
	return '!text-info-dark'
})

const textClass = computed(() => {
	if (props.type === 'error') {
		return '!text-error'
	} else if (props.type === 'warning') {
		return '!text-warning'
	} else if (props.type === 'success') {
		return '!text-success'
	}
	return '!text-info'
})
</script>
<template>
	<div
		class="rounded-md border border-neutral-light p-4"
		:class="bgClass"
		role="alert"
		aria-live="assertive"
	>
		<div class="flex">
			<div class="flex-shrink-0">
				<SvgCircleX
					v-if="type === 'error'"
					class="h-5 w-5 text-error-dark"
					aria-hidden="true"
				/>
				<SvgTriangleExclamation
					v-if="type === 'warning'"
					class="h-5 w-5 text-warning-dark"
					aria-hidden="true"
				/>
				<SvgCircleCheck
					v-if="type === 'success'"
					class="h-5 w-5 text-success-dark"
					aria-hidden="true"
				/>
				<SvgCircleInfo
					v-if="type === 'info'"
					class="h-5 w-5 text-info-dark"
					aria-hidden="true"
				/>
			</div>
			<div class="ml-3">
				<h3
					v-if="$slots.title || title"
					class="!text-sm !font-medium"
					:class="[titleClass, $slots.text ? '!mb-2' : '']"
				>
					<slot name="title" />
					{{ title }}
				</h3>
				<div class="!text-sm" :class="textClass">
					<slot name="text" />
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>
