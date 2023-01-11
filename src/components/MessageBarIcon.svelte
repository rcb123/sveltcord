<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
	export let text: string;
	export let ref: string;
</script>

<a class="sidebar-icon group block" href={ref}>
	<div class="ml-4 flex items-center">
		<span class="w-8"><Icon {icon} /></span>
		<span>{text}</span>
	</div>
</a>

<style lang="scss">
	.sidebar-icon {
		@apply relative flex items-center
               h-12 w-full my-2 shadow-lg
               bg-gray-700 text-red-500
               hover:bg-red-600 hover:text-white
               rounded-xl hover:rounded-sm
               transition-all duration-300 ease-linear
               cursor-pointer;
	}
</style>
