<script>

	let value = `Some words are <b>*italic*</b>, some are **bold**`;
import Thing from './Thing.svelte';
    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];
	let name = "Amazon";
</script>

<input bind:value={name}>
<p>Hello {name}</p>
<ul>
	{#each cats as cat, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{i+1}: {cat.name}
		</a></li>
	{/each}
</ul>
{#each things as thing, i}
	<Thing name={thing.name}/>
{/each}
<style>
    li{
        text-align: start;
    }
</style>