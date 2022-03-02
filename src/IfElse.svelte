<script>
let user = {
    loggedIn: false
}

const toggle = () => {
    user.loggedIn = !user.loggedIn;
}
</script>
{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
{#if user.loggedIn}
    <p>Yes I am in</p>
    {/if}
    {#if !user.loggedIn}
    <p>Yes I am Out</p>
    {/if}