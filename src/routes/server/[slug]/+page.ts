import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.slug === 'usc') {
		return {
			title: '',
			content: ''
		};
	}
	if (params.slug === 'games') {
		return {
			title: '',
			content: ''
		};
	}
	if (params.slug === 'chess') {
		return {
			title: '',
			content: ''
		};
	}

	throw error(404, 'Server not found');
}) satisfies PageLoad;
