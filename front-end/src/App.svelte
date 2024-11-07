<!-- App.svelte -->
<script lang="ts">
  import Home from "./components/Home.svelte"
  import Chat from "./components/Chat.svelte";

  let isLoggedIn = false;

  function handleLogin() {
    isLoggedIn = true;  // In real case, you'd set this upon successful login
  }
</script>

{#if isLoggedIn}
  <Chat />
{:else}
  <Home on:submit={handleLogin} />
{/if}
