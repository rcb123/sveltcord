import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.slug === 'rezab') {
		return {
			title: '',
			content: ''
		};
	}
	if (params.slug === 'dpham') {
		return {
			title: '',
			content: ''
		};
	}
	if (params.slug === 'gdanz') {
		return {
			title: '',
			content: ''
		};
	}

	throw error(404, 'User not found');
}) satisfies PageLoad;
