<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-gray-300">
	<h1>{data.title}</h1>
	<div>{@html data.content}</div>
</div>
