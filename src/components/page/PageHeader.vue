<script setup lang="ts">
import { useConfig } from '../../composables/useConfig'

const { title } = useConfig()
</script>
<template>
	<header
		class="container container-padding typography my-8 flex justify-start items-start content-start"
	>
		<img src="/logo.svg " alt="Logo" class="w-12 mr-10 mt-2" />
		<h1>Screendesigns {{ title }}</h1>
	</header>
</template>
