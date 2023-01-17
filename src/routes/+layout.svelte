<script lang="ts">
	import '$root/app.css';
	import SideBar from '$components/SideBar.svelte';
</script>

<div class="flex flex-row bg-gray-700 text-gray-300 h-screen w-screen overscroll-none">
	<SideBar />
	<div class="ml-16">
		<slot />
	</div>
</div>
