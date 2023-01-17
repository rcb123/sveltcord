<script>
	import { onMount } from 'svelte';
	import { createReport } from '$root/services/report';

	let message = '';
	let success = false;

	onMount(() => {
		message = '';
		success = false;
	});

	function handleReport(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		let title = formData.get('title');
		const description = formData.get('description');
		createReport(title, description)
			.then(() => {
				message = 'Issue reported successfully';
				success = true;
			})
			.catch(() => {
				message = 'There was an error reporting the issue, please try again later';
				success = false;
			});
	}
</script>

<h1>Report an issue</h1>

<form on:submit|preventDefault={handleReport}>
	<label for="title">Title:</label>
	<input type="text" id="title" name="title" required />

	<label for="description">Description:</label>
	<textarea id="description" name="description" required />

	<button type="submit">Report</button>
</form>

{#if message}
	<p class:success>{message}</p>
{/if}
