<script lang="ts">
	import { onMount } from 'svelte';
	import { getUsers, getMessages, sendMessage } from '$root/services/users';
	import { getAuthToken, verifyJwt } from '$root/services/auth';

	let users: any[] = [];
	let messages: any[] = [];
	let selectedUserId: number | null = null;
	let newMessage = '';

	onMount(async () => {
		const token = getAuthToken();
		if (token) {
			const { userId } = await verifyJwt(token);
			users = await getUsers(userId);
		}
	});

	function handleUserSelect(userId: number) {
		selectedUserId = userId;
		getMessages(userId).then((msg) => (messages = msg));
	}

	function handleMessageSubmit() {
		sendMessage(selectedUserId, newMessage).then(() => {
			newMessage = '';
		});
	}
</script>

<div>
	<ul>
		{#each users as user}
			<li
				on:click={() => handleUserSelect(user.id)}
				on:keydown|preventDefault={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						handleUserSelect(user.id);
					}
				}}
			>
				{user.name}
			</li>
		{/each}
	</ul>
	<div>
		<form on:submit|preventDefault={handleMessageSubmit}>
			<input type="text" bind:value={newMessage} />
			<button type="submit">Send</button>
		</form>
		<ul>
			{#each messages as message}
				<li>{message.content}</li>
			{/each}
		</ul>
	</div>
</div>
