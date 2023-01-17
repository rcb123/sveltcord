<script lang="ts">
	import { login, setAuthToken } from '$root/services/auth';

	let email = '';
	let password = '';
	let error = '';

	function handleSubmit() {
		login(email, password)
			.then(({ user, token }) => {
				setAuthToken(token);
				// Redirect to home page
				window.location.href = '/';
			})
			.catch((err) => {
				error = err.message;
			});
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>
	<label>
		Password:
		<input type="password" bind:value={password} />
	</label>
	{#if error}
		<p>{error}</p>
	{/if}
	<button type="submit">Login</button>
</form>
