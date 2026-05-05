<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import Topbar from '$lib/components/layout/Topbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-row">
	<Sidebar/>
	<div class="flex flex-col w-full min-h-screen">
		<Topbar aba={"Dashboard"}/>
		{@render children()}
	</div>
</div>	