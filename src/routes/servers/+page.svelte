<script>
	import { onMount } from 'svelte';
	import { getServers, createServer, updateServer, deleteServer } from '$root/services/server';

	/**
	 * @type {any[]}
	 */
	let servers = [];

	onMount(async () => {
		servers = await getServers();
	});

	function handleCreateServer(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const name = formData.get('name');

		createServer(name).then(() => {
			servers = [...servers, { id: Date.now(), name }];
		});
	}

	/**
	 * @param {number} serverId
	 * @param {Event & { currentTarget: EventTarget & HTMLFormElement; }} event
	 */
	function handleUpdateServer(serverId, event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const name = formData.get('name');

		updateServer(serverId, name).then(() => {
			servers = servers.map((server) => (server.id === serverId ? { ...server, name } : server));
		});
	}

	/**
	 * @param {number} serverId
	 */
	function handleDeleteServer(serverId) {
		deleteServer(serverId).then(() => {
			servers = servers.filter((server) => server.id !== serverId);
		});
	}
</script>

<h1>Servers</h1>

<form on:submit|preventDefault={handleCreateServer}>
	<input type="text" name="name" placeholder="Server name" required />
	<button type="submit">Create</button>
</form>

<ul>
	{#each servers as server}
		<li>
			<form on:submit|preventDefault={(e) => handleUpdateServer(server.id, e)}>
				<input type="text" name="name" bind:value={server.name} required />
				<button type="submit">Save</button>
				<button type="button" on:click={() => handleDeleteServer(server.id)}>Delete</button>
			</form>
		</li>
	{/each}
</ul>
