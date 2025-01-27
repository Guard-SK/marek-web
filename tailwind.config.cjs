module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  	colors: {
				primary: 'var(--primary-color)',
				accent: 'var(--accent-color)',
				secondary_text: 'var(--secondary-text)',
		  	},
		},
	},
	plugins: [],
};
