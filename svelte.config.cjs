const resolve = require('path').resolve;


const adapter = require(process.env.ADAPTER || '@sveltejs/adapter-node');

const sveltePreprocess = require("svelte-preprocess");


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			sourceMap: false,
			postcss: true
		}),
		],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$elements: resolve('src/elements')
				},
			},
		
			ssr: {
				noExternal: ['node-fetch']
			}
		}
	}
};