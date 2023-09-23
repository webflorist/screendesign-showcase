<script async setup lang="ts">
import PageHeader from './components/page/PageHeader.vue'
import PageFooter from './components/page/PageFooter.vue'
import AlertMessage from './components/AlertMessage.vue'
import MonitorContainer from './components/MonitorContainer.vue'
import { useConfig } from './composables/useConfig'

const { currentScreendesign, currentScreendesignIndex, screendesigns, error } = useConfig()
</script>

<template>
	<PageHeader />

	<main class="container container-padding typography">
		<p>
			Die folgenden Screendesigns sind für eine Monitor-Auflösung von 1920x1200 optimiert. Es
			handelt sich dabei lediglich um Entwürfe einzelner Seitenansichten ohne Möglichkeiten
			zur Interaktion. Die einzelnen Entwürfe können mit folgendem Menü ausgewählt werden:
		</p>
		<nav class="m-default-sm">
			<ul v-if="screendesigns" class="unstyled flex justify-center">
				<li v-for="(screendesign, key) in screendesigns" :key="key">
					<span v-if="key !== 0" class="mx-3">|</span>
					<button
						@click="currentScreendesignIndex = key"
						class="link"
						:class="currentScreendesignIndex === key ? 'underline' : ''"
					>
						{{ screendesign?.title }}
					</button>
				</li>
			</ul>
		</nav>
		<AlertMessage v-if="error" :message="error" class="m-default-sm" />
		<template v-else>
			<p v-if="currentScreendesign?.description" class="m-default-sm text-center text-sm">
				{{ currentScreendesign.description }}
			</p>
			<MonitorContainer class="m-default-sm">
				<img :src="'/screendesigns/' + currentScreendesign?.image" alt="Screen Design" />
			</MonitorContainer>
		</template>
	</main>

	<PageFooter />
</template>
