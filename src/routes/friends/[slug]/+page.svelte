<script lang="ts">
	import ChatBox from '$components/ChatBox.svelte';
	/*
	import type { PageData } from './$types';

	export let data: PageData;
	*/

	let messages: any[] = [];
	let newMessage = '';

	function handleSendMessage() {
		console.log(newMessage);
		newMessage = '';
	}
</script>

<!--
<h1>{data.title}</h1>
<div>{@html data.content}</div>
-->

<ul>
	{#each messages as message}
		<li>{message.text}</li>
	{/each}
</ul>

<ChatBox />

<div class="fixed bottom-0 h-32 w-[calc(100vw-20rem)] bg-gray-700">
	<div class="fixed bottom-10 ml-10">
		<form on:submit|preventDefault={handleSendMessage}>
			<input
				bind:value={newMessage}
				type="text"
				placeholder="Enter your message..."
				class="input input-bordered w-[calc(90vw-25rem)]"
			/>
			<button class="btn w-[10vw]">Send</button>
		</form>
	</div>
</div>
