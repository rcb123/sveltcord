import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.slug === 'usc') {
		return {
			title: 'USC Community Server',
			content: ''
		};
	}
	if (params.slug === 'games') {
		return {
			title: 'Game Server',
			content: ''
		};
	}
	if (params.slug === 'chess') {
		return {
			title: 'USC Chess Club',
			content: ''
		};
	}

	throw error(404, 'Server not found');
}) satisfies PageLoad;
