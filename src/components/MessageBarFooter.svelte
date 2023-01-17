<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="bg-gray-900 fixed w-64 h-20 bottom-0 flex flex-row items-center">
	<a
		class="flex flex-row hover:bg-gray-700 ml-2 p-3 rounded-lg items-center transition-all duration-100 ease-linear cursor-pointer w-44 h-16"
		href="/profile"
	>
		<div class="avatar online placeholder mr-4">
			<div class="bg-gray-700 text-red-500 rounded-full w-8">
				<span class="text-sm">RB</span>
			</div>
		</div>
		<div class="text-left text-xs">
			<p class="font-bold text-gray-100">rezab</p>
			<p class="font-light text-gray-400">#0510</p>
		</div>
	</a>
	<a class="text-xl w-14 h-14 ml-1 items-center flex justify-center align-middle hover:bg-gray-700 rounded-full transition-all duration-100 ease-linear curson-pointer" href="/settings">
		<Icon icon="mdi:cog" />
	</a>
</div>
