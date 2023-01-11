<script lang="ts">
	import '$root/app.css';
	import SideBar from '$components/SideBar.svelte';
</script>

<div class="flex flex-row bg-gray-700">
	<SideBar />
	<slot />
</div>
