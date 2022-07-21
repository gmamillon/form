import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
		titleTemplate: '%s - Kolect Form',
		title: 'Kolect Form',
		htmlAttrs: {
			lang: 'en'
		}
		, meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
    css: [
        '/assets/css/global.scss'
    ],
	modules: [
		'@pinia/nuxt'
	],
    components: true
})
