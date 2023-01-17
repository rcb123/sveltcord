import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.slug === 'rezab') {
		return {
			title: 'Reza message page',
			content: ''
		};
	}
	if (params.slug === 'dpham') {
		return {
			title: 'Dylan message page',
			content: ''
		};
	}
	if (params.slug === 'gdanz') {
		return {
			title: 'George message page',
			content: ''
		};
	}

	throw error(404, 'User not found');
}) satisfies PageLoad;
