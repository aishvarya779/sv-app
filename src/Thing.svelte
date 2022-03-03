<script>
import Inner from './Inner.svelte';
const emojis = {
        apple: "🍎",
        banana: "🍌",
        carrot: "🥕",
        doughnut: "🍩",
        egg: "🥚"
	};
export let name;
const emoji = emojis[name];
function handleMsg(event){
    console.log(event.detail);
}
</script>
<p>
	<span>The emoji for { name } is { emoji }</span>
</p>
<Inner on:message={handleMsg}/>
<style>
	p {
		margin: 0.8em 0;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #FFDFD3;
	}
</style>