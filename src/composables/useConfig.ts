import { ref, computed } from 'vue'

type Screendesign = {
	title: string
	description?: string
	image: string
} | null
type Screendesigns = Screendesign[] | null
type Config = {
	title: string
	screendesigns: Screendesigns
}
type Error = string | null

const config = ref<Config | null>(null)
const error = ref<Error>(null)
const currentScreendesignIndex = ref(0)

export function useConfig() {
	fetch('./screendesigns/config.json')
		.then((res) => res.json())
		.then((json: Config) => {
			config.value = json
		})
		.catch((err) => (error.value = err))

	const currentScreendesign = computed<Screendesign>(() => {
		if (!Array.isArray(screendesigns.value)) {
			return null
		}
		return screendesigns.value[currentScreendesignIndex.value]
	})

	const screendesigns = computed<Screendesigns>(() => {
		return config.value?.screendesigns ?? []
	})

	const title = computed(() => {
		return config.value?.title ?? ''
	})

	return { title, screendesigns, currentScreendesign, currentScreendesignIndex, error }
}
