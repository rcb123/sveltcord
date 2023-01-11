<script lang="ts">
	import SideBarIcon from './SideBarIcon.svelte';
	import { CommunityStore } from '$root/stores/store';

	let servers: { name: string; id: string; logo: string; }[];

	servers = $CommunityStore;
</script>

<div class="relative top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
	<SideBarIcon icon="mdi:fire" tooltip="Direct Messages" ref="/friends" />
	<hr class="border-solid border-2 my-1 border-red-500" />

	{#each servers as server}
		<SideBarIcon icon={server.logo} tooltip={server.name} ref="/server/{server.id}" />
	{/each}

	<SideBarIcon icon="mdi:plus" tooltip="Add a Server" ref="/add" />
	<SideBarIcon icon="mdi:lightning-bolt" tooltip="Join a Server" ref="/join" />
	<SideBarIcon icon="mdi:alert" tooltip="Report a Problem" ref="/report" />

	<!-- Sidebar footer -->
	<div class="absolute w-full bottom-0 pb-2">
		<SideBarIcon icon="mdi:github" tooltip="sveltcord" ref="/contact" />
	</div>
</div>
