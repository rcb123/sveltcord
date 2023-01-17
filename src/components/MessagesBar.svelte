<script lang="ts">
	import MessageBarIcon from './MessageBarIcon.svelte';
	import MessageBarFooter from './MessageBarFooter.svelte';
	import { FriendsStore } from '$root/stores/store';

	let friends: { username: string; id: string; picture: string }[];

	friends = $FriendsStore;
</script>

<div class="relative z-0">
<div class="h-screen w-64 fixed m-0 bg-gray-800">
	<div
		class="relative top-0 left-0 flex flex-col text-white px-4"
	>
		<MessageBarIcon icon="fa-solid:user-friends" text="Friends" ref="/friends" />
		<a
			href="/friends"
			class="text-left text-xs text-gray-400 font-semibold hover:text-gray-200 transition-all duration-300"
		>
			<p>DIRECT MESSAGES <span class="float-right">+</span></p>
		</a>

		{#each friends as friend}
			<MessageBarIcon icon={friend.picture} text={friend.username} ref="/friends/{friend.id}" />
		{/each}
	</div>

	<MessageBarFooter />
</div>
</div>