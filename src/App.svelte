<script>
import Nested from './Nested.svelte';
import IfElse from './IfElse.svelte';
let pkg = {
	answer:320
}
	export let name;
	export let src;
	$: count = 0;
	function incrementCount() {
		count += 1;
	}
	let numbers = [1, 2, 3, 4,5];

	function addNumber() {
		numbers.push(numbers.length + 1);
		console.log(numbers);
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<main>
<IfElse/>
<Nested answer={42}/>
<Nested {...pkg}/>
	<h1>Hello {name}!</h1>
	<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>
	<button on:click={incrementCount}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
	<img src={src} alt="Test">
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 400;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>